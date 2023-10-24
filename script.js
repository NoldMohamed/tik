// متغير للعدد الإجمالي للصفحات
let totalPages = 95;

// متغير للفترة بين كل مراجعة (بالأيام)
const reviewInterval = 7;

// حساب عدد الصفحات لمراجعتها يوميًا
let pagesPerDay = totalPages / reviewInterval;

// تتبع اليوم الحالي
let currentDay = 1;

// دالة لتغيير العدد الإجمالي
function showChangeTotalPrompt() {
    const newTotalPages = prompt("أدخل العدد الجديد");
    if (newTotalPages !== null && !isNaN(newTotalPages)) {
        totalPages = parseInt(newTotalPages);
        document.getElementById("totalPages").textContent = totalPages; // تحديث رقم الوجه
        updatePagePerDay();
    }
}

// دالة لتحديث العدد الإجمالي للصفحات وعرض رقم الوجه
function updateTotalPages() {
    const newTotalPages = parseInt(document.getElementById("newTotalPages").value);
    if (!isNaN(newTotalPages)) {
        totalPages = newTotalPages;
        document.getElementById("totalPages").textContent = newTotalPages; // تحديث رقم الوجه
        updatePagePerDay();
    }
}

// دالة لتحديث عدد الصفحات لمراجعتها يوميًا
function updatePagePerDay() {
    pagesPerDay = totalPages / reviewInterval;
    document.getElementById("pagesPerDay").textContent = pagesPerDay;
    currentDay = 1; // إعادة التقدير إلى اليوم الأول بعد تغيير العدد الإجمالي
    displayCurrentReview();
}

// دالة لتحديث اليوم الموالي
function nextReview() {
    if (currentDay < reviewInterval) {
        currentDay++;
    } else {
        currentDay = 1; // إعادة التقدير إلى اليوم الأول بعد انتهاء الفترة
    }
    displayCurrentReview();
}

// دالة لعرض اليوم الحالي
function displayCurrentReview() {
    const startPage = Math.floor((currentDay - 1) * pagesPerDay) + 1;
    const endPage = Math.floor(currentDay * pagesPerDay);

    document.getElementById("currentReview").textContent = `يوم ${currentDay}: من الصفحة ${startPage} إلى الصفحة ${endPage}`;
}

// عرض اليوم الأول
displayCurrentReview();

// عرض عدد الصفحات لمراجعتها يوميًا
document.getElementById("pagesPerDay").textContent = pagesPerDay;
