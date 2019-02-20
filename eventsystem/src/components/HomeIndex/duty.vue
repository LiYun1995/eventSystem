<template>
    <div>
        <Card>
            
            <h1 style="float:left">今日值班</h1>
            <Button type="primary" style="float:right">值班安排</Button>
            <Button style="float:right">值班简报</Button>
          
          <Divider />
            <Carousel autoplay v-model="value2" loop height="300px">
            <CarouselItem v-for="item in photoaddress">
                <div v-html="item.photoDom"></div>
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
                    photoDom:"<div class=\"demo-carousel\">1</div>"
                },
                {
                    photoDom:"<div class=\"demo-carousel\">2</div>"
                }
                ]
            }
        }
    }
</script>
