$(function () {
    /* 다크모드 토글 */
    $('#themeToggle').on('click', function () {
        const $root = $('html');
        const isDark = $root.attr('data-theme') === 'dark';


        $root.attr('data-theme', isDark ? 'light' : 'dark');
        $(this).text(isDark ? 'Dark' : 'Light');

        $(this).toggleClass('change');
    });

    /*탑 버튼*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.topBtn').fadeIn();
        } else {
            $('.topBtn').fadeOut();
        }
    });

    $('.topBtn').click(function(){
        $('html, body').animate({
            scrollTop : 0
            }, 400);
            return false;
    });


    $('.card, .boardBox').addClass('reveal');

    /* 스크롤 기반 미세 인터랙션 (jQuery + Intersection Observer) */
    const observer = new IntersectionObserver(
        function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        },
        {
        threshold: 0.2
        }
    );


    $('.reveal').each(function () {
        observer.observe(this);
    });
});

/* --- JS: 기능 로직 --- */
    let currentFiles = [];
    let currentIndex = 0;

    function handleContent(element) {
        const filesString = element.getAttribute('data-files');
        const fileList = filesString.split(',').map(f => f.trim());
        
        // 첫 번째 파일의 확장자로 PDF 여부 확인
        const isPDF = fileList[0].toLowerCase().endsWith('.pdf');

        if (isPDF) {
            // PDF는 화면 꽉 차는 크기의 새 창으로 열기
            const w = screen.availWidth;
            const h = screen.availHeight;
            window.open(fileList[0], '_blank', `width=${w}, height=${h}, top=0, left=0`);
        } else {
            // 이미지는 모달 슬라이더 열기
            openModal(fileList);
        }
    }

    function openModal(files) {
        currentFiles = files;
        currentIndex = 0;
        document.getElementById("imageModal").style.display = "flex";
        updateModalView();
    }

    function updateModalView() {
        const modalImg = document.getElementById("fullImage");
        const counter = document.getElementById("imageCounter");
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        modalImg.src = currentFiles[currentIndex];
        counter.innerText = `${currentIndex + 1} / ${currentFiles.length}`;

        // 사진이 한 장이면 화살표 숨기기
        const showNav = currentFiles.length > 1 ? "block" : "none";
        prevBtn.style.display = showNav;
        nextBtn.style.display = showNav;
    }

    function changeImage(n) {
        currentIndex += n;
        if (currentIndex >= currentFiles.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = currentFiles.length - 1;
        updateModalView();
    }

    function closeModal() {
        document.getElementById("imageModal").style.display = "none";
    }

    // 배경 클릭 시 닫기
    window.onclick = function(event) {
        const modal = document.getElementById("imageModal");
        if (event.target == modal) closeModal();
    }