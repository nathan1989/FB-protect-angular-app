import fbData from '../../data/data';

class HomeController {
	constructor($scope, language) {
		// get the data with the chosen language
		let theData = fbData[language.get()][language.get()][0]

		// get JSON data, add it to page scope
		$scope.data = theData
		let modal = document.querySelector('[data-modal]')

		// get data for modal based on chosen item
		$scope.modalOpen = (type) => {
			// concat modal data and filter by chosen item
			let modalData = [
				...theData.pageLinks.outerLinks,
				...theData.pageLinks.innerLinks,
				theData.logoLink].filter((i) => type.includes(i.pageComponent))

			// show modal background
			modal.style.visibility = 'visible'
			// add data to modal
			$scope.modal = modalData[0]
      		modal.classList.add('modal-open')
		}

		$scope.modalClose = () => {
			// hide modal background
			modal.style.visibility = 'hidden'
      		modal.classList.remove('modal-open')
		}

		window.addEventListener('click', (e) => {
			if(e.target == modal) $scope.modalClose()
		})

		window.addEventListener('keyup', (e) => {
			if(e.code == 'Escape') $scope.modalClose()
		})
	}
}

export default HomeController
