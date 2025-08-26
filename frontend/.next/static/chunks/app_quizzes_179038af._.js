(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/quizzes/quizzes.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addIcon": "quizzes-module__LVI3Gq__addIcon",
  "container": "quizzes-module__LVI3Gq__container",
  "deleteIcon": "quizzes-module__LVI3Gq__deleteIcon",
  "item": "quizzes-module__LVI3Gq__item",
  "list": "quizzes-module__LVI3Gq__list",
  "quizInfo": "quizzes-module__LVI3Gq__quizInfo",
  "quizTitle": "quizzes-module__LVI3Gq__quizTitle",
  "title": "quizzes-module__LVI3Gq__title",
});
}),
"[project]/app/quizzes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quizzes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/quizzes/quizzes.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Quizzes() {
    _s();
    const [quizzes, setQuizzes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    async function deleteQuiz(uuid) {
        try {
            const res = await fetch("http://localhost:3001/quizzes/".concat(uuid), {
                method: "DELETE"
            });
            if (!res.ok) {
                console.log(res.text, res.status, res.statusText);
                throw new Error("Error deleting quiz");
            }
            await refreshQuizzes();
        } catch (err) {
            console.error(err);
        }
    }
    async function redirectToQuiz(uuid) {
        router.push("/quizzes/".concat(uuid));
    }
    async function redirectToCreateQuiz() {
        router.push("/create");
    }
    async function refreshQuizzes() {
        const res = await fetch("http://localhost:3001/quizzes");
        if (!res.ok) throw new Error("Error fetching quizzes");
        const data = await res.json();
        setQuizzes(data);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Quizzes.useEffect": ()=>{
            async function fetchQuizzes() {
                try {
                    await refreshQuizzes();
                } catch (err) {
                    console.error(err);
                }
            }
            fetchQuizzes();
        }
    }["Quizzes.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Quizzes"
            }, void 0, false, {
                fileName: "[project]/app/quizzes/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPlusCircle"], {
                size: 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addIcon,
                onClick: redirectToCreateQuiz
            }, void 0, false, {
                fileName: "[project]/app/quizzes/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                children: quizzes.map((quiz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                        onClick: ()=>redirectToQuiz(quiz.uuid),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quizTitle,
                                children: quiz.title
                            }, void 0, false, {
                                fileName: "[project]/app/quizzes/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quizInfo,
                                children: [
                                    quiz._count.questions,
                                    " questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/quizzes/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbTrash"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$quizzes$2f$quizzes$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteIcon,
                                size: 24,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    deleteQuiz(quiz.uuid);
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/quizzes/page.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, quiz.uuid, true, {
                        fileName: "[project]/app/quizzes/page.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/quizzes/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/quizzes/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(Quizzes, "4jfpMv1Z8Eiz+YW8NAp+htl73Qo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Quizzes;
var _c;
__turbopack_context__.k.register(_c, "Quizzes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_quizzes_179038af._.js.map