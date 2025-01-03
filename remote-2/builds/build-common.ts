import * as esbuild from 'esbuild';
import * as path from 'path';
import * as fs from 'fs';
import { federationBuilder } from '@softarc/native-federation/build';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { reactReplacements } from '@softarc/native-federation-esbuild/src/lib/react-replacements';

export async function buildProject(projectName) {
    console.log(123, projectName)
    // log react replacements to see internals
    // console.log(reactReplacements);

    const tsConfig = 'tsconfig.json';
    const outputPath = `dist/${projectName}`;
    /*
        *  Step 1: Initialize Native Federation
    */
    await federationBuilder.init({
        options: {
            workspaceRoot: path.join(__dirname, '..'),
            outputPath,
            tsConfig,
            // federationConfig: `${projectName}/federation.config.js`,
            federationConfig: `src/federation.config.js`,
            verbose: true,
        },

        /*
            * As this core lib is tooling-agnostic, you
            * need a simple adapter for your bundler.
            * It's just a matter of one function.
        */
        adapter: createEsBuildAdapter({ plugins: [] })
    });

    /*
        *  Step 2: Trigger your build process
        *
        *      You can use any tool for this. Here, we go with a very
        *      simple esbuild-based build.
        * 
        *      Just respect the externals in `federationBuilder.externals`.
    */

    fs.rmSync(outputPath, { force: true, recursive: true });

    await esbuild.build({
        entryPoints: [`src/main.ts`],
        // entryPoints: [`${projectName}/main.ts`],
        external: federationBuilder.externals,
        outdir: outputPath,
        bundle: true,
        platform: 'browser',
        format: 'esm',
        mainFields: ['es2020', 'browser', 'module', 'main'],
        conditions: ['es2020', 'es2015', 'module'],
        resolveExtensions: ['.ts', '.tsx', '.mjs', '.js', '.css', '.scss'],
        tsconfig: tsConfig,
        splitting: true,
    });

    fs.copyFileSync(`src/index.html`, `dist/${projectName}/index.html`);
    fs.copyFileSync(`src/favicon.ico`, `dist/${projectName}/favicon.ico`);
    fs.copyFileSync(`src/styles.css`, `dist/${projectName}/styles.css`);

    /*
        *  Step 3: Let the build method do the additional tasks
        *       for supporting Native Federation
    */

    await federationBuilder.build();
}
