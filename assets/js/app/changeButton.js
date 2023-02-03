export function changeButton() {
	const qrCodeContainer = document.querySelector("#qrcode-container");

	if (qrCodeContainer.classList.contains("qrcode-container-show")) {
		const qrCodeButton = document.querySelector(".qr-form-content-button");

		qrCodeButton.setAttribute("id", "qr-form-content-button-clear");
		qrCodeButton.setAttribute("type", "button");
		qrCodeButton.innerHTML = "Clear";
	}
}
