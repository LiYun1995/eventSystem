<template>
    <div>
        <Card>
            <Menu mode="horizontal" active-name="1">
        <MenuItem name="1">
            <Icon type="md-videocam" />
            摄像头
        </MenuItem>
        <MenuItem name="2">
            <Icon type="logo-codepen" />
            物资
        </MenuItem>
        <MenuItem name="3">
            <Icon type="md-car" />
            车辆
        </MenuItem>
    </Menu>
        </Card>
    </div>
</template>

<script>
export default {
    name:'BottomNav'
}
</script>


