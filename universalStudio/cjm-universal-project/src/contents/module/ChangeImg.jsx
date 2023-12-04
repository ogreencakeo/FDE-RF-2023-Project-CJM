import React, { useEffect } from 'react';
import '../../css/changeimg.css';
import $ from "jquery";

export function ChangeImg() {
    useEffect(() => {
        calc();
        $(window).resize(calc);

        let mk = $('.mask');
        let cv = $('.cover');

        cv.mousemove(function (e) {
            let posX = e.offsetX - 100;
            let posY = e.offsetY - 100;

            mk.css({
                top: posY + 'px',
                left: posX + 'px'
            });

            mk.hide();

            cv.hover(
                function () {
                    mk.show();
                },
                function () {
                    mk.hide();
                }
            );
            $(window).scroll(calc);
        });
    }, []);

    function calc() {
        let bgTop = $('.universal-change-img').offset()?.top - $(window).scrollTop();
        let bgLeft = $('.universal-change-img').offset()?.left;

        $('.bg').css({
            backgroundPosition: bgLeft + 'px ' + bgTop + 'px',
        });
        $('.mask').css({
            backgroundPosition: bgLeft + 'px ' + bgTop + 'px'
        })
    }

    return (
        <>
            <div className="universal-change-img">
                <div className="bg"></div>
                <div className="mask"></div>
                <div className="cover"></div>
            </div>
        </>
    )
}
