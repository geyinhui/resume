/**
 * Created by Administrator on 2017/2/21.
 */

    $(function(){
        //swiper��ʼ��
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            observer:true,//�޸�swiper�Լ�����Ԫ��ʱ���Զ���ʼ��swiper
            observeParents:true//�޸�swiper�ĸ�Ԫ��ʱ���Զ���ʼ��swiper
        });
    });
/*
(function(){
})();
*/
