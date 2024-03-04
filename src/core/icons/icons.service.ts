import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {IconCollection} from './icons.const';

@Injectable()
export class IconsService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
	Object.keys(IconCollection).forEach((folder: string) => {
		IconCollection[folder].forEach((icon: string) => {
		this.matIconRegistry.addSvgIcon(
			icon.replace('.svg', ''),
			this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/svg/${folder}/${icon}`),
		);
		});
	});
  }
}
