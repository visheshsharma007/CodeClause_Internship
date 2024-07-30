// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const examForm = document.getElementById('exam-form');
    const examList = document.getElementById('exam-list');

    let exams = [];

    function renderExams() {
        examList.innerHTML = '';
        exams.forEach((exam, index) => {
            const examItem = document.createElement('li');
            examItem.textContent = `${exam.name} - ${exam.date}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                exams.splice(index, 1);
                renderExams();
            };
            examItem.appendChild(deleteButton);
            examList.appendChild(examItem);
        });
    }

    examForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const examName = document.getElementById('exam-name').value;
        const examDate = document.getElementById('exam-date').value;
        exams.push({ name: examName, date: examDate });
        renderExams();
        examForm.reset();
    });

    renderExams();
});
