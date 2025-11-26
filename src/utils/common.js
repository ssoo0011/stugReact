import api from "../services/apiClient.js";


/**
* @params elementId, message, type
* */
export function showAlert(elementId, message, type) {
    const alertDiv = document.getElementById(elementId);
    if (!alertDiv) return;

    const alertBiMap = {
        danger: 'bi-exclamation-triangle-fill',
        warning: 'bi-exclamation-triangle-fill',
        success: 'bi-check-circle-fill',
        info: 'bi-info-circle-fill',
    };

    // 아이콘 업데이트
    const alertIconDiv = alertDiv.querySelector(".alert-icon");
    if (alertIconDiv) {
        alertIconDiv.classList.remove('bi-exclamation-triangle-fill', 'bi-check-circle-fill', 'bi-info-circle-fill')
        alertIconDiv.classList.add(alertBiMap[type]);
    }

    // 텍스트 업데이트
    const alertTextDiv = alertDiv.querySelector(".alert-text");
    if (alertTextDiv) {
        alertTextDiv.textContent = message;
    }

    // alert 클래스 토글
    alertDiv.classList.remove("alert", "fade", "show", "hide",
        "alert-danger", "alert-success", "alert-info", "alert-warning");
    alertDiv.classList.add("alert", `alert-${type}`, "fade", "show");

    setTimeout(() => {
        alertDiv.classList.remove("show");
        alertDiv.classList.add("hide");
    }, 2300);
}


export async function postApi(url, data) {
        return await api.post(url, data, {
            headers: { "Content-Type": "application/json" }
        });
}

export async function getApi(url) {
    return await api.get(url);
}