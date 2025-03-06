document.addEventListener("DOMContentLoaded", function () {
    if (typeof Rive === "undefined") {
        console.error("❌ Rive library is not loaded. Check index.html script order.");
        return;
    }

    const riveInstance = new Rive({
        src: "animated_login_character.riv", // ✅ Ensure the correct file path
        canvas: document.getElementById("riveCanvas"),
        autoplay: true,
        stateMachines: "State Machine 1",
        onLoad: function () {
            console.log("✅ Rive animation loaded successfully!");
        },
        onError: function (error) {
            console.error("❌ Rive failed to load:", error);
        }
    });
});
