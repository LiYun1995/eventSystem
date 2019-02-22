<template>
    <div>
        <Card>
            
            <h1 style="float:left">今日值班</h1>
            <Button type="primary" style="float:right">值班安排</Button>
            <Button style="float:right">值班简报</Button>
          <Divider />
            <Carousel autoplay v-model="value2" loop>
            <CarouselItem v-for="item in photoaddress">
                <img :src="item.photoDom" />
            </CarouselItem>
    </Carousel>
    
        </Card>
    </div>
</template>

<script>
    export default {
        name:'Duty',
        data () {
            return {
                value2: 0,
                photoaddress:[
                {
                    photoDom:require("./1.png")
                },
                {
                    photoDom:require("./2.png")
                }
                ]
            }
        }
    }
</script>
