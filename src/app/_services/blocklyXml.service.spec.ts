/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlocklyXmlService } from './blocklyXml.service';

describe('Service: BlocklyXml', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlocklyXmlService]
    });
  });

  it('should ...', inject([BlocklyXmlService], (service: BlocklyXmlService) => {
    expect(service).toBeTruthy();
  }));
});
