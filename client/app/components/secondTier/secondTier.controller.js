import fbData from '../../data/data';

class SecondTierController {
  constructor($location, $scope, language, childInherit) {
    // get the data with the chosen language
    let theData = fbData[language.get()][language.get()][0]

    // get the JSON data, filter by URL. Single page data should return as all URLs are unique
    let pageData = theData.pages.filter(function(i) {
      return $location.$$path.includes(i.pageUrl)
    })

    const close = document.querySelector('.second-header > .close');
    let flag = false;

    close.addEventListener('click', function(e) {
      if (flag) {
        flag = false;
      } else {
        flag = true;
        e.preventDefault();
        document.querySelector("#second-tier-container > *").classList.remove("slide-in-t2");
        document.querySelector("home").classList.remove("active");

        setTimeout(function() {
          close.click()
        }, 410);
      }
    }, false);

    // add data to page scope
    let data = pageData[0]
    $scope.data = data

    // pass data to child pages through the service
    childInherit.addParent(data)

    // get column count
    $scope.columnAmount = () => {
      let count = data.navLinks.length
      let hasSubtitle = data.navLinks.filter((i) => i.pageSubtitle)

      if (count < 8 && hasSubtitle.length === 0) {
        return 'two-columns'
      } else {
        return 'three-columns'
      }
    }
  }
}

export default SecondTierController
