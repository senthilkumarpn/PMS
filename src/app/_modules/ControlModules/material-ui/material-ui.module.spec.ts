import { MaterialUIModule } from './material-ui.module';

describe('MaterialUIModule', () => {
  let materialUIModule: MaterialUIModule;

  beforeEach(() => {
    materialUIModule = new MaterialUIModule();
  });

  it('should create an instance', () => {
    expect(materialUIModule).toBeTruthy();
  });
});
