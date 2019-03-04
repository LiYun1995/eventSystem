<template>
    <div>
        <Card style="height:218px;float:right">
            <div class="card-container-top">
            <slot></slot>
            </div>
        </Card>
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

