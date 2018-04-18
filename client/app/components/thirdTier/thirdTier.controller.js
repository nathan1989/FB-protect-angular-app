class ThirdTierController {
  constructor($location, $scope, childInherit, $filter) {
    // get the data from the parent page through the service
    let parentData = childInherit.getParent()[0]
    let data = parentData.navLinks

    // filter through the data based on the URL. Single page data should return as all URLs are unique
    let pageData = data.filter(function(i) {
      return $location.$$path.includes(i.pageUrl)
    })

    const close = document.querySelector('.third-header > .close');
    let flag = false;

    close.addEventListener('click', function(e) {
      if (flag) {
        flag = false;
      } else {
        e.preventDefault();

        flag = true;

        document.querySelector("#third-tier-container > *").classList.remove("slide-in-t3");
        document.querySelector("second-tier").classList.remove("active");

        setTimeout(function() {
          close.click()
        }, 410);
      }
    }, false);

    // add data to page scope
    $scope.parentLink = parentData.pageUrl
    $scope.data = pageData[0]
    $scope.parentPageSubtitle = parentData.pageSubtitle

    // if page is golden rules
    $scope.isGolden = parentData.pageComponent == 'home.goldenrules' ? true : false
    $scope.pageHelper = parentData.pageHelper

    // get column type
    $scope.columnType = () => (parentData.navLinkType === 'large') ? '' : 'tile-small-columns'

    // check if there is multiple search lists
    $scope.searchType = () => {
      if (pageData[0].navLinks.length > 1) return 'search-list-multiple'
    }

    // show/hide search list if there is multiple
    $scope.toggle = false;
    $scope.toggleSearchList = function(e) {
      if ($scope.searchType() !== undefined) {
        $scope.toggle = !$scope.toggle;
        angular.element(e.currentTarget).toggleClass('closed')
      }
    }

    $scope.filteredData = $scope.data;
    $scope.$watch('data.search', (val) => {
      $scope.filteredData = $filter('filter')($scope.data.navLinks, val);
    });
  }
}

export default ThirdTierController;
