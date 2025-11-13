// Simple click alert for Enroll Now buttons
document.querySelectorAll('.enroll').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your interest! Enrollment details will be sent to your email.');
  });
});