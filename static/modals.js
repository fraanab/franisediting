document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("modal");
	const modalContent = document.querySelector(".modal-content");
	const modalTrigger = document.querySelectorAll(".modal-trigger");
	const closeBtn = document.querySelector(".close-btn");

	// Define a list of video IDs
	const videoList = {
		//video_1: '898576062',
		video_1: '1114051305',
		video_2: '939395772',
		//video_3: '898580348',
		video_3: '898581381',
		video_4: '898582177',
		video_5: '1113998699',
		//video_6: '898582700',
	};

	modalTrigger.forEach((trigger, index) => {
		trigger.addEventListener("click", () => openModal(videoList[`video_${index + 1}`]));
	});

	closeBtn.addEventListener("click", closeModal);

	document.addEventListener("mousedown", (e) => {
		if (!modal.contains(e.target) && modal.style.display === "block"){
			closeModal()
		}
	})

	function openModal(videoId) {
		const iframe = document.createElement("iframe");
		iframe.src = `https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
		iframe.frameBorder = 0;
		iframe.allow = "autoplay; fullscreen; picture-in-picture";
		iframe.style = "position:fixed;top:0;left:0;width:90%;height:60%;transform:translate(5%, 35%);";

		const closeButton = document.createElement('button')
		closeButton.innerHTML = 'CLOSE'
		closeButton.style.background = "none";
		closeButton.style.fontFamily = "RubikM";
		closeButton.style.fontSize = "3rem";
		closeButton.style.color = "#fff";
		closeButton.style.border= "none";
		closeButton.style.cursor= "pointer";
		closeButton.style.transform = "translate(30px, 100px)"
		closeButton.addEventListener("mouseenter", () => closeButton.style.color = "var(--coolor1)");
		closeButton.addEventListener("mouseleave", () => closeButton.style.color = "#fff");
		closeButton.addEventListener('click', closeModal)

		modalContent.innerHTML = "";
		modalContent.appendChild(iframe);
		modalContent.appendChild(closeButton)

		modal.style.display = "block";
		modalContent.style.position = "fixed";
		modalContent.style.top = "50%";
		modalContent.style.left = "50%";
		modalContent.style.transform = "translate(-50%, -50%)";
		modalContent.style.background = "rgba(0,0,0,0.6)";
		modalContent.style.backdropFilter = "blur(5px)";
		modalContent.style.width = "100%";
		modalContent.style.height = "100%";
		modalContent.style.zIndex = "1000";
		modalContent.classList.add("fade-in");
	}

	function closeModal() {
		const iframe = modalContent.querySelector('iframe')
		const player = new Vimeo.Player(iframe)
		player.pause()
		modal.style.display = "none";
		modalContent.classList.remove("fade-in");
	}
});
