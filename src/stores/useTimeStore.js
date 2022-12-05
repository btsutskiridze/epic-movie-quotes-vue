import { defineStore } from "pinia";
import i18n from "@/i18n";
import { computed } from "vue";
export const useTimeStore = defineStore("Time", {
  state: () => {
    return {
      time_formats: {
        en: [
          [60, "seconds", 1], // 60
          [120, "1 min ago", "1 min from now"], // 60*2
          [3600, "mins", 60], // 60*60, 60
          [7200, "1 hr ago", "1 hr from now"], // 60*60*2
          [86400, "hrs", 3600], // 60*60*24, 60*60
          [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
          [604800, "days", 86400], // 60*60*24*7, 60*60*24
          [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
          [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
          [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
          [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
          [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
          [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
          [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
          [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ],
        ka: [
          [60, "წამის", 1], // 60
          [120, "1 წუთის წინ", "1 minute from now"], // 60*2
          [3600, "წუთის", 60], // 60*60, 60
          [7200, "1 საათის წინ", "1 hour from now"], // 60*60*2
          [86400, "საათის", 3600], // 60*60*24, 60*60
          [172800, "გუშინ", "Tomorrow"], // 60*60*24*2
          [604800, "დღის", 86400], // 60*60*24*7, 60*60*24
          [1209600, "წინა კვირას", "Next week"], // 60*60*24*7*4*2
          [2419200, "კვირები", 604800], // 60*60*24*7*4, 60*60*24*7
          [4838400, "წინა თვეს", "Next month"], // 60*60*24*7*4*2
          [29030400, "თვის", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
          [58060800, "შარშან", "Next year"], // 60*60*24*7*4*12*2
          [2903040000, "წლის", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
          [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
          [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ],
      },
    };
  },
  actions: {
    timeAgo(time) {
      const lang = computed(() => i18n.global.locale);
      switch (typeof time) {
        case "number":
          break;
        case "string":
          time = +new Date(time);
          break;
        case "object":
          if (time.constructor === Date) time = time.getTime();
          break;
        default:
          time = +new Date();
      }
      let seconds = (+new Date() - time) / 1000,
        token = lang.value === "en" ? "ago" : "წინ",
        list_choice = 1;

      if (seconds == 0) {
        return lang.value === "en" ? "Just now" : "ახლახანს";
      }
      if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = "from now";
        list_choice = 2;
      }
      let i = 0,
        format;
      while ((format = this.time_formats[lang.value][i++]))
        if (seconds < format[0]) {
          if (typeof format[2] == "string") return format[list_choice];
          else
            return (
              Math.floor(seconds / format[2]) + " " + format[1] + " " + token
            );
        }
      return time;
    },
  },
});
