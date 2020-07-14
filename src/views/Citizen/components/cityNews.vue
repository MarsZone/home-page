<template>
    <Row class="news-row">
        <Col data-aos="fade-up" data-aos-delay="100" span="8"><vCard></vCard></Col>
        <Col data-aos="fade-up" data-aos-delay="10" span="8"><vCard></vCard></Col>
        <Col data-aos="fade-up" data-aos-delay="200" span="8"><vCard></vCard></Col>
    </Row>
</template>
<script>
import vCard from './views/vCard';
export default {
    components: {
        vCard
    },
}
</script>

<style lang="less" scoped>
    .news-row{
        width: 100%;
    }
</style>
