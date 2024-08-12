skillPourcentage()
function skillPourcentage() {
    let duration = 3000
    const skill_bar = document.querySelectorAll(".skill-bar")

    skill_bar.forEach((skill) => {
        let maxWidth = parseInt(skill.textContent)
        let currentValue = 0
        let increment = maxWidth / (duration / 10)

        let timer = setInterval(() => {
            if(currentValue >= maxWidth) {
                clearInterval(timer)
            } else {
                currentValue += increment
                skill.textContent = Math.round(currentValue) + "%"
            }
        },10)
    })
}