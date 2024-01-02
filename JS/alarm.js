import { selectMenu, ringtone } from "../script.js";

export const Alarm = () => {
    const setAlarmBtn = document.querySelector(".set-Alarm");
    const alarmList = document.querySelector("#alarmList");
    const stopAlarmBtn = document.querySelector(".stopAlarm");
    const Alarms = [];
    let isRinging = false;

    setAlarmBtn.addEventListener("click", () => {
        const time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
        Alarms.push(time);
        Alarms.sort(); // Sort alarms in increasing order

        updateAlarmList();
    });

    function updateAlarmList() {
        alarmList.innerHTML = Alarms.map((time) => `
            <li>${time} <button class="deleteAlarm">Delete Alarm</button></li>
        `).join('');

        const deleteBtns = document.querySelectorAll(".deleteAlarm");
        deleteBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => deleteAlarm(index));
        });
    }

    function deleteAlarm(index) {
        stopAlarm(); // Stop the alarm before removing the item
        Alarms.splice(index, 1);
        updateAlarmList();
    }

    function checkAlarms() {
        if (isRinging) {
            return;
        }

        const date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let ampm = "AM";

        if (hour > 12) {
            hour -= 12;
            ampm = "PM";
        }

        if (hour < 10) {
            hour = "0" + hour;
        }

        minute = minute < 10 ? "0" + minute : minute;

        Alarms.forEach((alarm, index) => {
            if (alarm === `${hour}:${minute} ${ampm}`) {
                console.log("Alarm ringing...");
                isRinging = true;
                playRingtone();
                stopAlarmBtn.style.visibility = "visible";
                setTimeout(() => {
                    isRinging = false;
                    stopAlarm();
                }, ringtone.duration * 1000); // Stop the ringtone after its duration
            }
        });
    }

    function playRingtone() {
        ringtone.currentTime = 0; // Reset the audio to the beginning
        ringtone.play();
    }

    function stopAlarm() {
        ringtone.pause();
        stopAlarmBtn.style.visibility = "hidden";
    }

    stopAlarmBtn.addEventListener("click", stopAlarm);

    setInterval(checkAlarms, 100); // Check alarms every 100 milliseconds
};
