
  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        // Hapus class active dari semua nav-link
        navLinks.forEach(nav => nav.classList.remove("active"));
        // Tambahkan class active ke item yang diklik
        this.classList.add("active");
      });
    });
  }); 

  // UNTUK HOVER GAMBAR DI HEADER
  document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".wiggle-animation");

    let isDragging = false;

    img.addEventListener("mousedown", function() {
        isDragging = true;
        img.style.animation = "shake 0.2s infinite ease-in-out"; // Mulai goyang
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
        img.style.animation = ""; // Hentikan goyang
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            const x = (window.innerWidth / 2 - event.clientX) / 40; // Gerakan lebih kecil
            const y = (window.innerHeight / 2 - event.clientY) / 40;
            img.style.transform = `rotate(${x}deg) translate(${x}px, ${y}px)`;
        }
    });
});
// AKHIR HOVER GAMBAR 

// AWAL EFEK MESIN KETIK
document.addEventListener("DOMContentLoaded", function() {
  const text = "Welcome, My Portfolio!";
  const typingElement = document.getElementById("typingText");
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          typingElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100); // Kecepatan ketik (100ms per huruf)
      } else {
          typingElement.style.borderRight = "none"; // Hapus kursor setelah selesai
      }
  }

  typeWriter(); // Mulai animasi saat halaman dimuat
});
// AKHIR EFEK MESIN KETIK

// AWAL FORM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Formulir berhasil dikirim.",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan, coba lagi!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "Gagal!",
        text: "Gagal mengirim formulir. Periksa koneksi internet Anda.",
      });
    }
  });
});
// AKHIR FORM
