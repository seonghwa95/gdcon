<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <%@ include file="../common/head.jsp"%>

    <link rel="stylesheet" href="/css/cont.css">

    <script src="/js/cont.js"></script>
</head>
<body>

<div id="container">
    <header id="header">
        <div class="header_box c_header">
            <div class="main_inner flex">
                <h1 class="h_logoBox">
                    <a href="/">
                        <img src="/images/common/h_logo.png" alt="">
                    </a>
                </h1>
                <nav class="h_nav">
                    <ul class="dep1 flex j_c_center">
                        <li class="dep1_li">
                            <a href="javascript:;" class="dep1_a">회사소개</a>
                            <ul class="dep2">
                                <li class="dep2_li"><a href="/intro/greeting" class="dep2_a">인사말</a></li><br/>
                                <li class="dep2_li"><a href="/intro/map" class="dep2_a">오시는 길</a></li>
                            </ul>
                        </li>
                        <li class="dep1_li">
                            <a href="javascript:;" class="dep1_a">신기술 신공법</a>
                            <ul class="dep2">
                                <li class="dep2_li">
                                    <a href="/newTechnology/1/rfBeam" class="dep2_a">보강 엄지말뚝</a>
                                </li>
                                <li class="dep2_li">
                                    <a href="javascript:;" class="dep2_a">자립식 흙막이<img src="/images/icon/h_arrow.png" alt=""></a>
                                    <ul class="dep3">
                                        <li class="dep3_li">
                                            <a href="/newTechnology/2/rsr" class="dep3_a">RSR 공법</a>
                                        </li>
                                        <li class="dep3_li">
                                            <a href="/newTechnology/2/cscr" class="dep3_a">CSCR 공법</a>
                                        </li>
                                        <li class="dep3_li">
                                            <a href="/newTechnology/2/var" class="dep3_a">VAR 공법</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dep2_li">
                                    <a href="/newTechnology/3/nwa" class="dep2_a">무띠장 영구앵커 옹벽</a>
                                </li>
                                <li class="dep2_li">
                                    <a href="javascript: ;" onclick="alert('페이지 준비중입니다.'); return false;" class="dep2_a">수평 레이커 시스템</a>
                                </li>
                                <li class="dep2_li">

                                    <a href="javascript: ;" onclick="alert('페이지 준비중입니다.'); return false;" class="dep2_a">수직증축 하중분배 공법</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dep1_li">
                            <a href="javascript:;" class="dep1_a">설계 및 컨설팅</a>
                            <ul class="dep2">
                                <li class="dep2_li">
                                    <a href="javascript:void(0)" class="dep2_a">토질 및 기초 설계</a>
                                </li><br/>
                                <li class="dep2_li">
                                    <a href="javascript:void(0)" class="dep2_a">흙막이 설계</a>
                                </li>
                                <li class="dep2_li">
                                    <a href="javascript:void(0)" class="dep2_a">수직증축 리모델링 기초 설계</a>
                                </li>
                                <li class="dep2_li">
                                    <a href="javascript:void(0)" class="dep2_a">지하안정영향평가</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dep1_li">
                            <a href="javascript:;" class="dep1_a">사업실적</a>
                            <ul class="dep2">
                                <li class="dep2_li">
                                    <a href="/performance/rfBeam/list" class="dep2_a">보강 엄지말뚝</a>
                                </li><br/>
                                <li class="dep2_li">
                                    <a href="/performance/rsr/list" class="dep2_a">자립식 흙막이</a>

                                </li>
                                <li class="dep2_li">
                                    <a href="/performance/nwa/list" class="dep2_a">무띠장 영구앵커 옹벽</a>
                                </li>
                                <li class="dep2_li">
                                    <a href="/performance/raker/list" class="dep2_a">수평 레이커 시스템</a>
                                </li>
                                <li class="dep2_li">
                                    <a href="/performance/perpen/list" class="dep2_a">수직증축 하중분배 공법</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dep1_li">
                            <a href="/board/brochure/list" class="dep1_a">브로셔</a>
                        </li>
                    </ul>
                </nav>

                <div class="siteMap_btn">
                    <div class="hamburger">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </div>


                <div class="siteMap_box">
                    <div class="fixed sm_wrap flex">
                        <div class="left_box">
                            <h4></h4>
                        </div>
                        <div class="right_box">
                            <div class="white_bg">

                                <ul class="sm_dep1">
                                    <li>
                                        <a class="sm_dep1_a" href="javascript:;">
                                            <span>회사소개</span>
                                        </a>
                                        <ul class="sm_dep2">
                                            <li><a href="/intro/greeting" class="sm_dep2_a">인사말</a></li>
                                            <li><a href="/intro/map" class="sm_dep2_a">오시는길</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="sm_dep1_a" href="javascript:;">
                                            <span>신기술 신공법</span>
                                        </a>
                                        <ul class="sm_dep2">
                                            <li class="sm_dep2_li">
                                                <a href="/newTechnology/1/rfBeam" class="sm_dep2_a">보강 엄지말뚝</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="javascript:;" class="sm_dep2_a">자립식 흙막이<img src="/images/icon/h_arrow.png" alt=""></a>
                                                <ul class="sm_dep3">
                                                    <li class="sm_dep3_li">
                                                        <a href="/newTechnology/2/rsr" class="sm_dep3_a">RSR 공법</a>
                                                    </li>
                                                    <li class="sm_dep3_li">
                                                        <a href="/newTechnology/2/cscr" class="sm_dep3_a">CSCR 공법</a>
                                                    </li>
                                                    <li class="sm_dep3_li">
                                                        <a href="/newTechnology/2/var" class="sm_dep3_a">VAR 공법</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="/newTechnology/3/nwa" class="sm_dep2_a">무띠장 영구앵커 옹벽</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="javascript:;" class="sm_dep2_a" onclick="alert('페이지 준비중입니다.'); return false;">수평 레이커 시스템</a>
                                            </li>
                                            <li class="sm_dep2_li">

                                                <a href="javascript:;" class="sm_dep2_a" onclick="alert('페이지 준비중입니다.'); return false;">수직증축 하증분배 공법</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="sm_dep1_a" href="javascript:;">
                                            <span>설계 및 컨설팅</span>
                                        </a>
                                        <ul class="sm_dep2">
                                            <li class="sm_dep2_li">
                                                <a href="javascript:void(0)" class="sm_dep2_a">토질 및 기초 설계</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="javascript:void(0)" class="sm_dep2_a">흙막이 설계</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="javascript:void(0)" class="sm_dep2_a">수직증축 리모델링 기초 설계</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="javascript:void(0)" class="sm_dep2_a">지하안정영향평가</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="sm_dep1_a" href="javascript:;">
                                            <span>사업실적</span>
                                        </a>
                                        <ul class="sm_dep2">
                                            <li class="sm_dep2_li">
                                                <a href="/performance/rfBeam/list" class="sm_dep2_a">보강 엄지말뚝</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="/performance/rsr/list" class="sm_dep2_a">자립식 흙막이</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="/performance/nwa/list" class="sm_dep2_a">무띠장 영구앵커 옹벽</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="/performance/raker/list" class="sm_dep2_a">수평 레이커 시스템</a>
                                            </li>
                                            <li class="sm_dep2_li">
                                                <a href="/performance/perpen/list" class="sm_dep2_a">수직증축 하증분배 공법</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="sm_dep1_a" href="/board/brochure/list">
                                            <span>브로셔</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <script>

        // $(document).ready(function(){
        //     var loca = location.pathname;
        //     if(loca.length > 1){
        //         $('.header_box').addClass('c_header');
        //     }
        // });



    </script>

    <div id="Sub">
        <div class="visual intro" style="background: linear-gradient(#000, #28417c);">
        </div>
        <nav id="SubNavi">
            <ul class="parent flex inner" data-liststyle="none">
                <li class="home-data p-d">
                    <a class="parent-link" href="/" title="홈 이동">
                        <img src="/images/icon/home_icon.png" alt="">
                    </a>
                </li>
                <li class="parent-data p-d fs16">
                    <a href="/intro/map" class="parent-link p-link" title="회사소개 이동">회사소개</a>
                </li>
                <li class="child-data p-d">
                    <a href="/intro/greeting" class="parent-link p-link fs16" title="인사말 이동">인사말</a>
                </li>
            </ul>
        </nav>
    </div>
    <div id="Cont">
        <section id="over_section" class="about_section pd_section">
            <article class="over_wrap">
                <div class="over_sec1">
                    <div class="inner">

                        <div class="cont_box">
                            <div class="sub_titBox">
                                <h4 class="sub_sTit fs30">인사말</h4>
                            </div>
                            <div class="sub_txtBox">
                                <p class="stxt fs20">“특화된 기술, 끊임없는 변화와 혁신, 책임있는 경영으로<br/> 더 나은 가치를 실현하겠습니다”</p>
                                <div class="bggray">
                                    <p class="stxt fs18">㈜지디컨설턴트 홈페이지를 방문해 주신 여러분, 반갑습니다.</p>
                                    <p class="stxt fs18">당사는 지반분야 설계 및 컨설팅, 신기술·신공법 개발을 전문으로 하며, 현재까지 특화된 기술을 바탕으로 수 많은 프로젝트를 성공적으로 수행하였으며, 전문성을 가진 기업으로 꾸준히 성장해 왔습니다.</p>
                                    <p class="stxt fs18">차별화된 경쟁력을 가진 신뢰받는 기업으로 도약하고자 최선의 노력을 기울이고 있으며, 이를 위해 전문적인 서비스를 제공하고, 가치있는 기술을 지속적으로 연구·개발하여 유용하게 사용될 수 있도록 노력하고 있습니다.</p>
                                    <p class="stxt fs18">여러분의 변함없는 관심과 격려 그리고 힘찬 성원을 부탁드립니다. <br/>감사합니다.</p>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <p class="stxt fs22">㈜지디컨설턴트 임직원 일동</p>
                            </div>

                        </div>
                    </div>
                </div>


            </article>
        </section>
    </div>

    <%@ include file="../common/footer.jsp" %>
</div>
</body>
</html>