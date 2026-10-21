// Define security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check the complete security status
let isSecure = isAlarmOn &&
               isDoorLocked &&
               isWindowClosed &&
               isOwnerInside;

if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another situation
isAlarmOn = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}