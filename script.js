const namaInput = document.getElementById('nama');
const suggestionsDiv = document.getElementById('suggestions');
const mataKuliahInput = document.getElementById('mata-kuliah');
const dosenInput = document.getElementById('dosen');
const registrationForm = document.getElementById('registration-form');

// Daftar rekomendasi mata kuliah dan dosen
const rekomendasi = {
    "John Doe": {
        mataKuliah: "Matematika Dasar",
        dosen: "Dr. Smith"
    },
    "Jane Smith": {
        mataKuliah: "Fisika Dasar",
        dosen: "Prof. Johnson"
    },
    // Tambahkan data lainnya di sini
};

namaInput.addEventListener('input', () => {
    const inputText = namaInput.value;
    suggestionsDiv.innerHTML = '';

    if (inputText.length > 0) {
        for (const nama in rekomendasi) {
            if (nama.toLowerCase().includes(inputText.toLowerCase())) {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = nama;
                suggestionItem.addEventListener('click', () => {
                    namaInput.value = nama;
                    mataKuliahInput.value = rekomendasi[nama].mataKuliah;
                    dosenInput.value = rekomendasi[nama].dosen;
                    suggestionsDiv.style.display = 'none';
                });
                suggestionsDiv.appendChild(suggestionItem);
            }
        }
        suggestionsDiv.style.display = 'block';
    } else {
        suggestionsDiv.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== namaInput && event.target !== suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }
});

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Periksa apakah semua kolom telah diisi
    if (!namaInput.value || !nimInput.value || !mataKuliahInput.value || !dosenInput.value) {
        alert('Mohon isi semua kolom!');
    }
});


