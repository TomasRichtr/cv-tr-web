import { Selectors } from '../../constants/index.constants';
import { PageUtils } from '../page.utils';

export default class IndexPage extends PageUtils {
  public get elements() {
    return {
      descriptionEl: this.getByDataCy(Selectors.DESCRIPTION),
      vImageEl: this.getByDataCy(Selectors.PROFILE_IMAGE),
      imageEl: this.getByDataCy(Selectors.PROFILE_IMAGE).locator('img').first(),
    };
  }

  public get imgSrc() {
    return this.elements.imageEl.getAttribute('src');
  }

  public async descriptionText() {
    const textContent = await this.elements.descriptionEl.textContent();
    return textContent?.trim().length;
  }
}
