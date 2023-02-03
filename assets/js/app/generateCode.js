import { qrCode } from "../utils/initializeQR.js";

export function generateCode() {
	const qrCodeForm = document.querySelector(".qr-form-content");

	qrCodeForm.addEventListener("submit", event => {
		event.preventDefault();

		const qrCodeContainer = document.querySelector("#qrcode-container");
		const qrCodeInput = document.querySelector(".qr-form-content-input");

		if (!qrCodeInput.value) {
			toastr.error("Please enter a valid URL!");
			return false;
		}

		qrCode.makeCode(qrCodeInput.value);

		qrCodeInput.value = "";

		qrCodeContainer.classList.remove("qrcode-container");
		qrCodeContainer.classList.add("qrcode-container-show");
	});
}
