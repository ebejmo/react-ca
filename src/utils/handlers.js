export function refreshPage() {
  window.location.reload();
}

export function goBack(navigate) {
  navigate(-1);
}

export function goHome(navigate) {
  navigate('/');
}
