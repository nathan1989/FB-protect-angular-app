import SecondTierModule from './secondTier'
import SecondTierController from './secondTier.controller';
import SecondTierComponent from './secondTier.component';
import SecondTierTemplate from './secondTier.html';

describe('SecondTier', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SecondTierModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SecondTierController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SecondTierTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SecondTierComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SecondTierTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SecondTierController);
      });
  });
});
