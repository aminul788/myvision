import { lightUpWindow } from '../dimWindow/dimWindowService';

let selected = false;
let exportButtonActive = false;
let currentlySelectedElement = null;

function setExportButtonActive() {
  if (!exportButtonActive) {
    const exportButton = document.getElementById('export-labels-popup-export-button');
    exportButton.style.backgroundColor = 'rgb(205, 232, 205)';
    exportButton.classList.add('export-button-active');
    exportButtonActive = true;
  }
}

function setExportButtonDefault() {
  const exportButton = document.getElementById('export-labels-popup-export-button');
  exportButton.style.backgroundColor = 'rgb(222, 222, 222)';
  exportButton.classList.remove('export-button-active');
  exportButtonActive = false;
}

function uncheckCurrentlySelected() {
  currentlySelectedElement.checked = false;
}

function selectFormat(target) {
  if (!selected) {
    currentlySelectedElement = target;
    setExportButtonActive();
    selected = true;
  } else if (target === currentlySelectedElement) {
    selected = false;
    setExportButtonDefault();
  } else {
    uncheckCurrentlySelected();
    currentlySelectedElement = target;
  }
}

function displayExportLabelsPopup() {
  const exportLabelsPopUpElement = document.getElementById('export-labels-popup-parent');
  setTimeout(() => {
    exportLabelsPopUpElement.style.display = 'block';
  }, 100);
}

function hideExportLabelsPopUp() {
  const exportLabelsPopUpElement = document.getElementById('export-labels-popup-parent');
  exportLabelsPopUpElement.style.display = 'none';
  lightUpWindow();
}

export { selectFormat, displayExportLabelsPopup, hideExportLabelsPopUp };