import Header from "../../components/layout/Header";
import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {postApi, showAlert, getApi} from "../../utils/common.js";
import api from "../../services/apiClient.js";

export default function MyPage() {

    const navigate = useNavigate();

    return (
        <>
            <main className="container col-lg-4 content-space-t-3">
                <div className="row justify-content-lg-between align-items-lg-center">

                </div>
            </main>
        </>
    );
}