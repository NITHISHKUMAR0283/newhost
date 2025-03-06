document.addEventListener("DOMContentLoaded", function () {
    // ✅ Check if Rive is loaded
    if (typeof Rive === "undefined") {
        console.error("❌ Rive library is not loaded. Check index.html script order.");
        return;
    }

    // ✅ Initialize Rive Animation
    const riveInstance = new Rive({
        src: "animated_login_character.riv", // ✅ Make sure this file is in the root of your project
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
