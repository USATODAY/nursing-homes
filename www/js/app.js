var mobile = mobile || {};
mobile.htmlElement = jQuery("html");
mobile.panelHead = jQuery("#panel-head");
mobile.panelSub = jQuery("#panel-sub");
mobile.arrPanelData = jQuery(".panel-data");
mobile.dataCharts = jQuery(".data-charts");
mobile.dataListItems = jQuery(".data-list").find("li");
mobile.panelWrap = jQuery(".panel-wrap");
mobile.dataWrap = jQuery(".data-wrap");
mobile.stateMenu = jQuery(".state-menu");
mobile.arrDataText = jQuery(".data-text");
mobile.arrDataNumbers = jQuery(".data-number");
mobile.arrPies = jQuery(".pie-box");
mobile.dataContainer = jQuery(".data-container");
mobile.chatterBox = jQuery(".mobile-company-info-box");
mobile.mainHead = jQuery(".mobile-head");
mobile.searchTable = jQuery(".search-table");
mobile.background = jQuery(".mobile-back-bar");
mobile.panelSubChat = jQuery(".panel-sub-chat");
mobile.arrStateText = [
    "Arkansas' data represents vaccination levels for kindergarteners during the 2014-15 school year. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Arizona's data represents vaccination levels for kindergartners during the 2013-14 school year. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "California's data represents vaccination levels for kindergartners during the 2014-15 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Florida's data represents vaccination levels for kindergartners in public schools during the 2014-15 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Georgia's data represents vaccination levels for kindergartners during the 2014-15 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Idaho's data represents vaccination levels for kindergartners during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Illinois' data represents vaccination levels for all students K-12 during the 2013-14 school year. The MMR rate references students who specifically have been vaccinated for measles. Data for schools with enrollments of fewer than 10 students has been redacted.",
    "Massachusetts' data represents vaccination levels for kindergartners during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 30 kindergartners has been redacted.",
    "Michigan's data represents vaccination levels for all students K-12 during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 students has been redacted.",
    "Minnesota's data represents vaccination levels for kindergartners during the 2013-14 school year.  The Medical Exemption rate includes both medical and conscientious objections. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Mississippi's data represents vaccination levels for kindergarteners during the 2014-15 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "North Carolina's data represents vaccination levels for kindergartners during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "North Dakota’s data represents vaccination levels for kindergarteners during the 2013-14 school year. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "New York's data represents vaccination levels of all students K-12 during the 2013-14 school year. The MMR rate references students who specifically have been vaccinated for measles. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 students has been redacted.",
    "Oregon's data represents only non-medical exemptions for all students K-12 during the 2013-14 school year. Data for schools with fewer than 50 students and for schools with fewer than 10 nonmedical exemptions has been redacted.",
    "Rhode Island's data represents vaccination levels for kindergartners during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Tennessee's data represents vaccination levels for private-school kindergartners during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted. Data from the state's public schools was unavailable.",
    "Virginia's data represents vaccination levels for kindergartners during the 2013-14 school year. The location of each school refers to the state health district. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Vermont's data represents vaccination levels of all students K-12 during the 2013-14 school year. The MMR rate references students who specifically have been vaccinated for measles. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 students has been redacted.",
    "Washington's data represents vaccination levels for kindergartners during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 kindergartners has been redacted.",
    "Wisconsin's data represents vaccination levels of all students K-12 during the 2013-14 school year. \"Complete\" means a student is entirely up-to-date on all recommended vaccines. Data for schools with enrollments of fewer than 10 students has been redacted.",
    "West Virginia's data represents vaccination levels for kindergartners during the 2013-14 school year. Schools with enrollments of fewer than 30 kindergartners have been omitted."
];


mobile.currentFocus = null;

mobile.blnSmallScrn = false;

if ($(window).width() < 800) {
    mobile.blnSmallScrn = true;
}

mobile.setPanelInfo = function (data) {


    if (data === null) {
        mobile.panelHead.empty();
        mobile.panelSub.empty();
        mobile.panelSubChat.empty();
        mobile.dataCharts.removeClass("show");
        mobile.arrPanelData.eq(0).addClass("hidden");
        mobile.dataListItems.empty();
    }

    else {
        mobile.panelWrap.eq(0).show();
        mobile.dataCharts.addClass("show");

        mobile.panelHead.text(data.name);
        mobile.panelSubChat.text(" ( " + data.beds + " beds )");


        //mobile.panelSub.text(data.City + ", " + data.State);
        mobile.panelSub.show();
        //mobile.drawChart(data);
        mobile.renderTable(data);

    }
};

mobile.renderTable = function (prop) {
    var i;
    var strHTML = "";
    console.log(prop);
    strHTML += '<table class="data-table" cellspacing="0" cellpadding="0" border="0">';
    strHTML += '    <tr>';
    strHTML += '        <td class="table-column head">2015 rating</td>';
    strHTML += '        <td rowspan="2" class="table-column middle"><div class="star-circle"><div>' + (parseInt(prop.O_15) - parseInt(prop.O_14)).toString() + '</div></div></td>';
    strHTML += '        <td class="table-column head">2014 rating</td>';
    strHTML += '    </tr>';
    strHTML += '    <tr>';
    strHTML += '        <td class="table-column star">';
    for (i = 0; i < parseInt(prop.O_15); i ++) {
        strHTML += '*';
    }
    strHTML += '        </td>';
    strHTML += '        <td class="table-column star">';
    for (i = 0; i < parseInt(prop.O_14); i ++) {
        strHTML += '*';
    }
    strHTML += '        </td>';
    strHTML += '    </tr>';
    strHTML += '    <tr>';
    strHTML += '        <td class="table-column dash">';
    for (i = 0; i < parseInt(prop.SR_15); i ++) {
        strHTML += '-';
    }
    strHTML += '        </td>';
    strHTML += '        <td class="table-column middle label"><div>Survey rating</div></td>';
    strHTML += '        <td class="table-column dash">';
    for (i = 0; i < parseInt(prop.SR_14); i ++) {
        strHTML += '-';
    }
    strHTML += '        </td>';
    strHTML += '    </tr>';
    strHTML += '    <tr>';
    strHTML += '        <td class="table-column dash">';
    for (i = 0; i < parseInt(prop.Q_15); i ++) {
        strHTML += '-';
    }
    strHTML += '        </td>';
    strHTML += '        <td class="table-column middle label"><div>Quality rating</div></td>';
    strHTML += '        <td class="table-column dash">';
    for (i = 0; i < parseInt(prop.Q_14); i ++) {
        strHTML += '-';
    }
    strHTML += '        </td>';
    strHTML += '    </tr>';
    strHTML += '    <tr>';
    strHTML += '        <td class="table-column dash">';
    for (i = 0; i < parseInt(prop.SF_15); i ++) {
        strHTML += '-';
    }
    strHTML += '        </td>';
    strHTML += '        <td class="table-column middle label"><div>Staff rating</div></td>';
    strHTML += '        <td class="table-column dash">';
    for (i = 0; i < parseInt(prop.SF_14); i ++) {
        strHTML += '-';
    }
    strHTML += '        </td>';
    strHTML += '    </tr>';













    strHTML += '</table>';
    mobile.dataContainer.html(strHTML);
};


mobile.calcPercent = function (num) {
    return Math.round(num * 1000) / 10 + "%";
};

mobile.numberWithCommas = function (x) {
    if (!x) {
        return "";
    }
    else {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
};

mobile.setUpPanels = function () {
    var numWidth, numHeight;
    numWidth = window.innerWidth; //mobile.boardImage.eq(0).width();
    numHeight = window.innerHeight - 47; //mobile.boardImage.eq(0).height();
    if (numHeight > numWidth) {
        mobile.htmlElement.addClass("vert");
    } else {
        mobile.htmlElement.removeClass("vert");
    }
};

mobile.calcExtent = function (array1, array2, key) {


    var min = d3.min([d3.min(array1, function (d) {
        return d[key];
    }), d3.min(array2, function (d) {
        return d[key];
    })]);


    var max = d3.max([d3.max(array1, function (d) {
        return d[key];
    }), d3.max(array2, function (d) {
        return d[key];
    })]);

    return [min, max];
};


mobile.lookup = function (array, key, value) {
    var result = _.find(array, function (entry) {
        return entry[key] == value;
    });


    return result;
};


mobile.listen = function () {

    $(window).on("resize", function () {
        mobile.drawChart(mobile.currentFocus);
    });


};


$(document).ready(function () {

    var blnIframeEmbed = window != window.parent;

    if (blnIframeEmbed) {
        $("body").addClass("iFrame");
        $("#header").hide();
        $(".mobile-footer-link").hide();
        $(".article-button").hide();
    }

    mobile.listen();
    mobile.panelWrap.eq(0).hide();
    window.setTimeout(function () {
        $(".preloader-mobile").eq(0).fadeOut(500);
    }, 1000);

    onresize = onload = function () {
        mobile.setUpPanels();
    };});

(function () {

    var searchApp = angular.module('dataSearch', [])
        .config([
            '$compileProvider',
            function ($compileProvider) {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript):/);
            }
        ]);
    searchApp.controller('SearchController', function ($http, $scope, $filter) {

        $scope.companies = [];
        $scope.stateOptions = [
            {state: "Select a State to begin"},
            {state: "AK"},
            {state: "AL"},
            {state: "AR"},
            {state: "AZ"},
            {state: "CA"},
            {state: "CO"},
            {state: "CT"},
            {state: "DC"},
            {state: "DE"},
            {state: "FL"},
            {state: "GA"},
            {state: "GU"},
            {state: "HI"},
            {state: "IA"},
            {state: "ID"},
            {state: "IL"},
            {state: "IN"},
            {state: "KS"},
            {state: "KY"},
            {state: "LA"},
            {state: "MA"},
            {state: "MD"},
            {state: "ME"},
            {state: "MI"},
            {state: "MN"},
            {state: "MO"},
            {state: "MS"},
            {state: "MT"},
            {state: "NC"},
            {state: "ND"},
            {state: "NE"},
            {state: "NH"},
            {state: "NJ"},
            {state: "NM"},
            {state: "NV"},
            {state: "NY"},
            {state: "OH"},
            {state: "OK"},
            {state: "OR"},
            {state: "PA"},
            {state: "PR"},
            {state: "RI"},
            {state: "SC"},
            {state: "SD"},
            {state: "TN"},
            {state: "TX"},
            {state: "UT"},
            {state: "VA"},
            {state: "VI"},
            {state: "VT"},
            {state: "WA"},
            {state: "WI"},
            {state: "WV"},
            {state: "WY"}
        ];
        $scope.stateItem = {
            states: $scope.stateOptions[0]
        };

        this.loadStateData = function () {
            mobile.panelWrap.eq(0).hide();
            mobile.mainHead.addClass("top");
            mobile.searchTable.addClass("search");
            mobile.background.addClass("dark");
            if (mobile.stateMenu.eq(0).children("option:selected").index() > 0) {
                //mobile.chatterBox.html(mobile.arrStateText[mobile.stateMenu.eq(0).children("option:selected").index() - 1]);
                $http.get("js/data/" + mobile.stateMenu.eq(0).children("option:selected").text().toLowerCase() + ".json").then(function (data) {
                    mobile.data = data.data;
                    $scope.data = data.data;
                });
            } else {
                mobile.chatterBox.html("Use the search section above to find your school.");
            }
            mobile.chatterBox.show();
        };

        this.checkMenu = function () {
            if (mobile.stateMenu.val() != "0") {
                return true;
            } else {
                return false;
            }
        };

        this.blur = function () {
            $scope.filterTerm = "";
        };

        this.setFocus = function (focusItem) {
            Analytics.click("Nursing home selected");
            mobile.currentFocus = focusItem;
            mobile.setPanelInfo(focusItem);
            $scope.isFormOpen = false;


            //set the filter term to be the full company name of the company selected
            // $scope.filterTerm = company.name;
            $scope.filterTerm = "";


            jQuery(window).on("resetSearch", function () {
                $scope.filterTerm = "";

                mobile.searchCont.find("input").val("");
            });
            $scope.setShare(focusItem);

        };


        this.clear = function () {
            $scope.filterTerm = "";
            mobile.setPanelInfo(null);
        };

        this.mobileSearch = function () {
            Analytics.click("Typed in search box");
            mobile.panelWrap.eq(0).hide();

            $scope.filteredArray = $filter("filter")($scope.data, $scope.filterTerm, false);
            if ($scope.filteredArray.length > 400) {
                $scope.filteredArray.length = 0;
            }
            if ($scope.filteredArray.length === 0) {
                mobile.chatterBox.show();
            } else {
                mobile.chatterBox.hide();
            }

            if ($scope.filterTerm !== "") {
                mobile.currentFocus = null;
                $scope.isFormOpen = true;
            }
            else {
                $scope.isFormOpen = false;
                mobile.chatterBox.show();
            }
        };

        $scope.showShare = function () {
            $(".panel-inner-wrap").addClass("blur");
            $(".share-page").addClass("show");
        };

        $scope.hideShare = function () {
            $(".panel-inner-wrap").removeClass("blur");
            $(".share-page").removeClass("show");
        };

        $scope.showInfo = function () {
            $(".panel-inner-wrap").addClass("blur");
            $(".info-page").addClass("show");
        };

        $scope.hideInfo = function () {
            $(".panel-inner-wrap").removeClass("blur");
            $(".info-page").removeClass("show");
        };

        $scope.setShare = function (schoolObj) {
            var copy,
                encodedURL,
                encodedURL2,
                encodedStr,
                encodedStrTE;

            var encodedBaseURL = encodeURIComponent("http://www.gannett-cdn.com/experiments/usatoday/2015/02/measles/");

            if (schoolObj) {
                copy = "My school, " + schoolObj.Name + " in " + schoolObj.City + ", " + schoolObj.State + ",  has a complete vaccination rate of " + (Math.round(schoolObj.Complete * 10000) / 100).toString() + ". Look up your school.";
                encodedURL = encodeURIComponent("http://www.gannett-cdn.com/experiments/usatoday/2015/02/measles/index.html");
                encodedURL2 = encodeURI("http://www.gannett-cdn.com/experiments/usatoday/2015/02/measles/index.html");
                encodedStr = encodeURIComponent(copy);
                encodedStr = encodeURI(encodedStr);
                encodedStrTE = encodeURIComponent(copy);
            }

            else {
                copy = "How vaccinated are your local schools? Look up their rates @USATODAY";
                encodedURL = encodeURIComponent("http://www.gannett-cdn.com/experiments/usatoday/2015/02/measles/index.html");
                encodedURL2 = encodeURI("http://www.gannett-cdn.com/experiments/usatoday/2015/02/measles/index.html");
                encodedStr = encodeURIComponent(copy);
                encodedStr = encodeURI(encodedStr);
                encodedStrTE = encodeURIComponent(copy);
            }

            var encodedTitle = encodeURIComponent("School Vaccination Rate");
            var fbRedirectUrl = encodeURIComponent("http://www.gannett-cdn.com/usatoday/_common/_dialogs/fb-share-done.html");

            var tweetUrl = "https://twitter.com/intent/tweet?url=" + encodedURL + "&text=" + encodedStrTE + "";

            var fbUrl = "javascript: var sTop=window.screen.height/2-(218);var sLeft=window.screen.width/2-(313);window.open('https://www.facebook.com/dialog/feed?display=popup&app_id=215046668549694&link=" + encodedURL2 + "&picture=http://www.gannett-cdn.com/experiments/usatoday/2015/02/measles/img/fb-share.jpg&name=" + encodedTitle + "&description=" + encodedStr + "&redirect_uri=http://www.gannett-cdn.com/experiments/usatoday/_common/_dialogs/fb-share-done.html','sharer','toolbar=0,status=0,width=580,height=400,top='+sTop+',left='+sLeft);Analytics.click('Facebook share');void(0);";


            var emailURL = "mailto:?body=" + encodedStrTE + "%0d%0d" + encodedURL + "&subject=" + encodedTitle;

            $scope.share = {
                copy: copy,
                tweetUrl: tweetUrl,
                fbUrl: fbUrl,
                emailURL: emailURL
            };
        };
        $scope.setShare(null);
    });


})();

