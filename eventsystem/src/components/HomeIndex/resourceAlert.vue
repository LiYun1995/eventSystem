<template>
    <div>
        <div class="commonContainer" style="height:218px;float:right">
            <div class="card-container-top">
            <slot name="top-slot"></slot>
            </div>
            <div class="card-container">
            <slot name="container-slot"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data () {
            return {
                switchValue: true
            }
        }
}
</script>

