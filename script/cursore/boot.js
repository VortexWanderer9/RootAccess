const bootText = document.querySelector('.boot-text')
const bootScreen = document.querySelector('.boot-screen')

const lines = [
  "[BOOT] Initializing hardware protocols...",
  "[BOOT] Loading encrypted core modules...",
  "[BOOT] Verifying system integrity... [OK]",
  "[BOOT] Establishing secure environment...",
  "[BOOT] Injecting stealth monitoring tools...",
  "[ANON] Accessing darknet nodes...",
  "[ANON] Routing through proxy layers...",
  "[ANON] Bypassing firewall restrictions...",
  "[ANON] Masking IP: 192.168.***.***",
  "[ANON] Initializing quantum encryption keys...",
  "[ANON] Uploading anonymous payload...",
  "[ANON] Disabling trace logs...",
  "[READY] Secure connection established.",
  "[READY] Command interface active.",
  "[READY] Awaiting encrypted commands..."
];

let i = 0
function typeBoot() {
    if(i < lines.length){
        bootText.textContent += lines[i] + "\n"
        i++
        setTimeout(typeBoot, 800)
        console.log(lines[i]);
        
    }else{
        setTimeout(() =>{
            document.querySelector(".boot-screen").style.display = "none"
        }, 1000)
    }
}
typeBoot()