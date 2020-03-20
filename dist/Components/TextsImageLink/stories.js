"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var premiumServices = [{
  title: "INTERVIEW CLASS",
  highlight: "Learn how to ace an interview and improve your English skills at the same time",
  description: "Our teachers specialize in English for interviews. With 40+ hours of live classes every month, you’re bound to find a slot that works in your timezone. You will receive personalized interaction and feedback in every class making this a unique experience.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverseTop: false,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: false
}, {
  title: "PROFILE REVIEW",
  highlight: "Have experts review your VanHack profile - improve all your profiles at once",
  description: "All improvements directly translate to your resume and LinkedIn Profile. Impove all three at once! LinkedIn’s own data shows candidates with an improved profile are around 30% more likely to be hired.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverseTop: true,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: true
}, {
  title: "PREMIUM SLACK GROUP",
  highlight: "Exclusive Premium Slack Group. Connect with thousands of  motivated Premium Members",
  description: "Get exciting information that’s not publicly available and access specific channels like #leap and #immigration where our specialists will answer your questions. Be motivated with the #I-got-a_job. And most of all, inspire each other in your common quest.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverseTop: false,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: false
}, {
  title: "LIVE EXCLUSIVE WEBINARS",
  highlight: "CEOs, Senior Recruiters, Immigration Specialists share knowledge and answer your questions",
  description: "Get access to real experts and learn from them. There’s nothing quite like a live Q&A session with someone who’s been there and done that.",
  image: require("../../../assets/images/img_premium_interview.svg"),
  reverseTop: true,
  mdLabel: true,
  label: "watch a class",
  to: "#",
  source: "http://via.placeholder.com/200x200",
  smImg: true,
  reverseBottom: true
}];
(0, _react2.storiesOf)("Components|Texts Image Link", module).add("Default", function () {
  return _react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_index.default, {
    title: premiumServices[0].title,
    highlight: premiumServices[0].highlight,
    description: premiumServices[0].description,
    image: premiumServices[0].image,
    reverseTop: premiumServices[0].reverseTop,
    mdLabel: premiumServices[0].mdLabel,
    label: premiumServices[0].label,
    to: premiumServices[0].to,
    source: premiumServices[0].source,
    smImg: premiumServices[0].smImg,
    reverseBottom: premiumServices[0].reverseBottom
  }));
}).add("Reverse", function () {
  return _react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, _react.default.createElement(_index.default, {
    title: premiumServices[1].title,
    highlight: premiumServices[1].highlight,
    description: premiumServices[1].description,
    image: premiumServices[1].image,
    reverseTop: premiumServices[1].reverseTop,
    mdLabel: premiumServices[1].mdLabel,
    label: premiumServices[1].label,
    to: premiumServices[1].to,
    source: premiumServices[1].source,
    smImg: premiumServices[1].smImg,
    reverseBottom: premiumServices[1].reverseBottom
  }));
}).add("Multiply", function () {
  return _react.default.createElement(_Grid.Row, {
    style: {
      padding: "24px"
    }
  }, premiumServices.map(function (service) {
    return _react.default.createElement(_index.default, {
      title: service.title,
      highlight: service.highlight,
      description: service.description,
      image: service.image,
      reverseTop: service.reverseTop,
      mdLabel: service.mdLabel,
      label: service.label,
      to: service.to,
      source: service.source,
      smImg: service.smImg,
      reverseBottom: service.reverseBottom
    });
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvVGV4dHNJbWFnZUxpbmsvc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJwcmVtaXVtU2VydmljZXMiLCJ0aXRsZSIsImhpZ2hsaWdodCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJyZXF1aXJlIiwicmV2ZXJzZVRvcCIsIm1kTGFiZWwiLCJsYWJlbCIsInRvIiwic291cmNlIiwic21JbWciLCJyZXZlcnNlQm90dG9tIiwibW9kdWxlIiwiYWRkIiwicGFkZGluZyIsIm1hcCIsInNlcnZpY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsQ0FDcEI7QUFDSUMsRUFBQUEsS0FBSyxFQUFFLGlCQURYO0FBRUlDLEVBQUFBLFNBQVMsRUFBRSxnRkFGZjtBQUdJQyxFQUFBQSxXQUFXLEVBQUUsZ1FBSGpCO0FBSUlDLEVBQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDLGtEQUFELENBSmxCO0FBS0lDLEVBQUFBLFVBQVUsRUFBRSxLQUxoQjtBQU1JQyxFQUFBQSxPQUFPLEVBQUUsSUFOYjtBQU9JQyxFQUFBQSxLQUFLLEVBQUUsZUFQWDtBQVFJQyxFQUFBQSxFQUFFLEVBQUUsR0FSUjtBQVNJQyxFQUFBQSxNQUFNLEVBQUUsb0NBVFo7QUFVSUMsRUFBQUEsS0FBSyxFQUFFLElBVlg7QUFXSUMsRUFBQUEsYUFBYSxFQUFFO0FBWG5CLENBRG9CLEVBY3BCO0FBQ0lYLEVBQUFBLEtBQUssRUFBRSxnQkFEWDtBQUVJQyxFQUFBQSxTQUFTLEVBQUUsOEVBRmY7QUFHSUMsRUFBQUEsV0FBVyxFQUFFLDBNQUhqQjtBQUlJQyxFQUFBQSxLQUFLLEVBQUVDLE9BQU8sQ0FBQyxrREFBRCxDQUpsQjtBQUtJQyxFQUFBQSxVQUFVLEVBQUUsSUFMaEI7QUFNSUMsRUFBQUEsT0FBTyxFQUFFLElBTmI7QUFPSUMsRUFBQUEsS0FBSyxFQUFFLGVBUFg7QUFRSUMsRUFBQUEsRUFB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TyxDQUFDVCxLQVBuQjtBQVFJLE1BQUEsRUFBRSxFQUFFUyxPQUFPLENBQUNSLEVBUmhCO0FBU0ksTUFBQSxNQUFNLEVBQUVRLE9BQU8sQ0FBQ1AsTUFUcEI7QUFVSSxNQUFBLEtBQUssRUFBRU8sT0FBTyxDQUFDTixLQVZuQjtBQVdJLE1BQUEsYUFBYSxFQUFFTSxPQUFPLENBQUNMO0FBWDNCLE1BRHdCO0FBQUEsR0FBM0IsQ0FETCxDQURhO0FBQUEsQ0FwQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCB7IFJvdyB9IGZyb20gXCIuLi8uLi9HcmlkXCI7XG5pbXBvcnQgVkhUZXh0c0ltYWdlTGluayBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBwcmVtaXVtU2VydmljZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJJTlRFUlZJRVcgQ0xBU1NcIixcbiAgICAgICAgaGlnaGxpZ2h0OiBcIkxlYXJuIGhvdyB0byBhY2UgYW4gaW50ZXJ2aWV3IGFuZCBpbXByb3ZlIHlvdXIgRW5nbGlzaCBza2lsbHMgYXQgdGhlIHNhbWUgdGltZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdXIgdGVhY2hlcnMgc3BlY2lhbGl6ZSBpbiBFbmdsaXNoIGZvciBpbnRlcnZpZXdzLiBXaXRoIDQwKyBob3VycyBvZiBsaXZlIGNsYXNzZXMgZXZlcnkgbW9udGgsIHlvdeKAmXJlIGJvdW5kIHRvIGZpbmQgYSBzbG90IHRoYXQgd29ya3MgaW4geW91ciB0aW1lem9uZS4gWW91IHdpbGwgcmVjZWl2ZSBwZXJzb25hbGl6ZWQgaW50ZXJhY3Rpb24gYW5kIGZlZWRiYWNrIGluIGV2ZXJ5IGNsYXNzIG1ha2luZyB0aGlzIGEgdW5pcXVlIGV4cGVyaWVuY2UuXCIsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfcHJlbWl1bV9pbnRlcnZpZXcuc3ZnXCIpLFxuICAgICAgICByZXZlcnNlVG9wOiBmYWxzZSxcbiAgICAgICAgbWRMYWJlbDogdHJ1ZSxcbiAgICAgICAgbGFiZWw6IFwid2F0Y2ggYSBjbGFzc1wiLFxuICAgICAgICB0bzogXCIjXCIsXG4gICAgICAgIHNvdXJjZTogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MjAwXCIsXG4gICAgICAgIHNtSW1nOiB0cnVlLFxuICAgICAgICByZXZlcnNlQm90dG9tOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUFJPRklMRSBSRVZJRVdcIixcbiAgICAgICAgaGlnaGxpZ2h0OiBcIkhhdmUgZXhwZXJ0cyByZXZpZXcgeW91ciBWYW5IYWNrIHByb2ZpbGUgLSBpbXByb3ZlIGFsbCB5b3VyIHByb2ZpbGVzIGF0IG9uY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWxsIGltcHJvdmVtZW50cyBkaXJlY3RseSB0cmFuc2xhdGUgdG8geW91ciByZXN1bWUgYW5kIExpbmtlZEluIFByb2ZpbGUuIEltcG92ZSBhbGwgdGhyZWUgYXQgb25jZSEgTGlua2VkSW7igJlzIG93biBkYXRhIHNob3dzIGNhbmRpZGF0ZXMgd2l0aCBhbiBpbXByb3ZlZCBwcm9maWxlIGFyZSBhcm91bmQgMzAlIG1vcmUgbGlrZWx5IHRvIGJlIGhpcmVkLlwiLFxuICAgICAgICBpbWFnZTogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX3ByZW1pdW1faW50ZXJ2aWV3LnN2Z1wiKSxcbiAgICAgICAgcmV2ZXJzZVRvcDogdHJ1ZSxcbiAgICAgICAgbWRMYWJlbDogdHJ1ZSxcbiAgICAgICAgbGFiZWw6IFwid2F0Y2ggYSBjbGFzc1wiLFxuICAgICAgICB0bzogXCIjXCIsXG4gICAgICAgIHNvdXJjZTogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MjAwXCIsXG4gICAgICAgIHNtSW1nOiB0cnVlLFxuICAgICAgICByZXZlcnNlQm90dG9tOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQUkVNSVVNIFNMQUNLIEdST1VQXCIsXG4gICAgICAgIGhpZ2hsaWdodDogXCJFeGNsdXNpdmUgUHJlbWl1bSBTbGFjayBHcm91cC4gQ29ubmVjdCB3aXRoIHRob3VzYW5kcyBvZiAgbW90aXZhdGVkIFByZW1pdW0gTWVtYmVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHZXQgZXhjaXRpbmcgaW5mb3JtYXRpb24gdGhhdOKAmXMgbm90IHB1YmxpY2x5IGF2YWlsYWJsZSBhbmQgYWNjZXNzIHNwZWNpZmljIGNoYW5uZWxzIGxpa2UgI2xlYXAgYW5kICNpbW1pZ3JhdGlvbiB3aGVyZSBvdXIgc3BlY2lhbGlzdHMgd2lsbCBhbnN3ZXIgeW91ciBxdWVzdGlvbnMuIEJlIG1vdGl2YXRlZCB3aXRoIHRoZSAjSS1nb3QtYV9qb2IuIEFuZCBtb3N0IG9mIGFsbCwgaW5zcGlyZSBlYWNoIG90aGVyIGluIHlvdXIgY29tbW9uIHF1ZXN0LlwiLFxuICAgICAgICBpbWFnZTogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX3ByZW1pdW1faW50ZXJ2aWV3LnN2Z1wiKSxcbiAgICAgICAgcmV2ZXJzZVRvcDogZmFsc2UsXG4gICAgICAgIG1kTGFiZWw6IHRydWUsXG4gICAgICAgIGxhYmVsOiBcIndhdGNoIGEgY2xhc3NcIixcbiAgICAgICAgdG86IFwiI1wiLFxuICAgICAgICBzb3VyY2U6IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAweDIwMFwiLFxuICAgICAgICBzbUltZzogdHJ1ZSxcbiAgICAgICAgcmV2ZXJzZUJvdHRvbTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkxJVkUgRVhDTFVTSVZFIFdFQklOQVJTXCIsXG4gICAgICAgIGhpZ2hsaWdodDogXCJDRU9zLCBTZW5pb3IgUmVjcnVpdGVycywgSW1taWdyYXRpb24gU3BlY2lhbGlzdHMgc2hhcmUga25vd2xlZGdlIGFuZCBhbnN3ZXIgeW91ciBxdWVzdGlvbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR2V0IGFjY2VzcyB0byByZWFsIGV4cGVydHMgYW5kIGxlYXJuIGZyb20gdGhlbS4gVGhlcmXigJlzIG5vdGhpbmcgcXVpdGUgbGlrZSBhIGxpdmUgUSZBIHNlc3Npb24gd2l0aCBzb21lb25lIHdob+KAmXMgYmVlbiB0aGVyZSBhbmQgZG9uZSB0aGF0LlwiLFxuICAgICAgICBpbWFnZTogcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nX3ByZW1pdW1faW50ZXJ2aWV3LnN2Z1wiKSxcbiAgICAgICAgcmV2ZXJzZVRvcDogdHJ1ZSxcbiAgICAgICAgbWRMYWJlbDogdHJ1ZSxcbiAgICAgICAgbGFiZWw6IFwid2F0Y2ggYSBjbGFzc1wiLFxuICAgICAgICB0bzogXCIjXCIsXG4gICAgICAgIHNvdXJjZTogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDB4MjAwXCIsXG4gICAgICAgIHNtSW1nOiB0cnVlLFxuICAgICAgICByZXZlcnNlQm90dG9tOiB0cnVlLFxuICAgIH0sXG5dO1xuXG5zdG9yaWVzT2YoXCJDb21wb25lbnRzfFRleHRzIEltYWdlIExpbmtcIiwgbW9kdWxlKVxuICAgIC5hZGQoXCJEZWZhdWx0XCIsICgpID0+IChcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nOiBcIjI0cHhcIn19PlxuICAgICAgICAgICAgPFZIVGV4dHNJbWFnZUxpbmtcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJlbWl1bVNlcnZpY2VzWzBdLnRpdGxlfVxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodD17cHJlbWl1bVNlcnZpY2VzWzBdLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJlbWl1bVNlcnZpY2VzWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlPXtwcmVtaXVtU2VydmljZXNbMF0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgcmV2ZXJzZVRvcD17cHJlbWl1bVNlcnZpY2VzWzBdLnJldmVyc2VUb3B9XG4gICAgICAgICAgICAgICAgbWRMYWJlbD17cHJlbWl1bVNlcnZpY2VzWzBdLm1kTGFiZWx9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3ByZW1pdW1TZXJ2aWNlc1swXS5sYWJlbH1cbiAgICAgICAgICAgICAgICB0bz17cHJlbWl1bVNlcnZpY2VzWzBdLnRvfVxuICAgICAgICAgICAgICAgIHNvdXJjZT17cHJlbWl1bVNlcnZpY2VzWzBdLnNvdXJjZX1cbiAgICAgICAgICAgICAgICBzbUltZz17cHJlbWl1bVNlcnZpY2VzWzBdLnNtSW1nfVxuICAgICAgICAgICAgICAgIHJldmVyc2VCb3R0b209e3ByZW1pdW1TZXJ2aWNlc1swXS5yZXZlcnNlQm90dG9tfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgKSlcbiAgICAuYWRkKFwiUmV2ZXJzZVwiLCAoKSA9PiAoXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4XCJ9fT5cbiAgICAgICAgICAgIDxWSFRleHRzSW1hZ2VMaW5rXG4gICAgICAgICAgICAgICAgdGl0bGU9e3ByZW1pdW1TZXJ2aWNlc1sxXS50aXRsZX1cbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ9e3ByZW1pdW1TZXJ2aWNlc1sxXS5oaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3ByZW1pdW1TZXJ2aWNlc1sxXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZT17cHJlbWl1bVNlcnZpY2VzWzFdLmltYWdlfVxuICAgICAgICAgICAgICAgIHJldmVyc2VUb3A9e3ByZW1pdW1TZXJ2aWNlc1sxXS5yZXZlcnNlVG9wfVxuICAgICAgICAgICAgICAgIG1kTGFiZWw9e3ByZW1pdW1TZXJ2aWNlc1sxXS5tZExhYmVsfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtwcmVtaXVtU2VydmljZXNbMV0ubGFiZWx9XG4gICAgICAgICAgICAgICAgdG89e3ByZW1pdW1TZXJ2aWNlc1sxXS50b31cbiAgICAgICAgICAgICAgICBzb3VyY2U9e3ByZW1pdW1TZXJ2aWNlc1sxXS5zb3VyY2V9XG4gICAgICAgICAgICAgICAgc21JbWc9e3ByZW1pdW1TZXJ2aWNlc1sxXS5zbUltZ31cbiAgICAgICAgICAgICAgICByZXZlcnNlQm90dG9tPXtwcmVtaXVtU2VydmljZXNbMV0ucmV2ZXJzZUJvdHRvbX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgKSlcbiAgICAuYWRkKFwiTXVsdGlwbHlcIiwgKCkgPT4gKFxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweFwifX0+XG4gICAgICAgICAgICB7cHJlbWl1bVNlcnZpY2VzLm1hcChzZXJ2aWNlID0+IChcbiAgICAgICAgICAgICAgICA8VkhUZXh0c0ltYWdlTGlua1xuICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2VydmljZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtzZXJ2aWNlLmhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3NlcnZpY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtzZXJ2aWNlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICByZXZlcnNlVG9wPXtzZXJ2aWNlLnJldmVyc2VUb3B9XG4gICAgICAgICAgICAgICAgICAgIG1kTGFiZWw9e3NlcnZpY2UubWRMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3NlcnZpY2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtzZXJ2aWNlLnRvfVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3NlcnZpY2Uuc291cmNlfVxuICAgICAgICAgICAgICAgICAgICBzbUltZz17c2VydmljZS5zbUltZ31cbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZUJvdHRvbT17c2VydmljZS5yZXZlcnNlQm90dG9tfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgKSk7XG4gICAgIl19