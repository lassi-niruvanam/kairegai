// eslint-disable-next-line node/no-unpublished-import
import {defineBuildConfig} from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index'],
  rollup: {emitCJS: true},
  declaration: true, // generate .d.ts files
});
