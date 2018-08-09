<template>
    <div>
        <h1>Find Your Politicians</h1>
        <button v-on:click="handleClick()">Call Google API</button>
        {{ text }}
    </div>
</template>

<script src="./finder.js"></script>
