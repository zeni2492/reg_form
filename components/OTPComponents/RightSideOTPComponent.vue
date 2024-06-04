<template>
    <div class="w-full flex justify-center items-center select-none">
        <img class="innerCircle absolute left-1/7 top-1/5 max-w-full" src="@/public/LoginEllipse.svg" alt="">
        <img class="outerCircle absolute left-1/5 top-1/5 max-w-full" src="@/public/innerEllipse.svg" alt="">
        <div class="img w-full flex justify-center items-center">
            <img class="z-10  " src="@/public/OtpImage.svg" alt="">
        </div>
    </div>
    <div class="UnderText absolute top-3/4 mt-giant text-center ">
        <h2 class="text-xl text-text">It's just OTP verification</h2>
        <p class="text-text text-base">You are one step away from recovering your password.</p>
    </div>
</template>