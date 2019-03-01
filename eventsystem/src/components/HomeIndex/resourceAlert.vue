<template>
    <div>
        <Card style="height:218px;float:right">
            <slot></slot>
            <Divider />
            <CellGroup>
                <Cell title="Display right content" extra="查看" />
                <Cell title="Display right content" extra="查看" />
                <Cell title="Display right content" extra="查看" />
            </CellGroup>
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

