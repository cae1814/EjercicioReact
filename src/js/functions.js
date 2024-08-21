import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function alerta(msg, icon, id = '') {
    onfocus(id);
    const MySwal = withReactContent(Swal);
    MySwal.fire({title: msg,
        icon: icon,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    function onfocus(id) {
        if (id !== '') {
            document.getElementById(id).focus();
        }
    }
}