import * as React from "react";
import { Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

<Calendar
    // Initially visible month. Default = Date()
    current={"2012-03-01"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={day => {
        console.log("selected day", day);
    }}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={day => {
        console.log("selected day", day);
    }}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={month => {
        console.log("month changed", month);
    }}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={direction => <div />}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => console.log(substractMonth)}
    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    onPressArrowRight={addMonth => console.log(addMonth)}
/>;

<Calendar
    // Initially visible month. Default = Date()
    current={"2012-03-01"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={day => {
        console.log("selected day", day);
    }}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={day => {
        console.log("selected day", day);
    }}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={month => {
        console.log("month changed", month);
    }}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={direction => <div />}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => console.log(substractMonth)}
    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    onPressArrowRight={addMonth => console.log(addMonth)}
    markedDates={{
        "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
        "2012-05-17": { marked: true },
        "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2012-05-19": { disabled: true, disableTouchEvent: true }
    }}
/>;

const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
const workout = { key: "workout", color: "green" };

<Calendar
    markedDates={{
        "2017-10-25": {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: "red"
        },
        "2017-10-26": { dots: [massage, workout], disabled: true }
    }}
    markingType={"multi-dot"}
/>;

<Calendar
    // Collection of dates that have to be colored in a special way. Default = {}
    markedDates={{
        "2012-05-20": { textColor: "green" },
        "2012-05-22": { startingDay: true, color: "green" },
        "2012-05-23": {
            selected: true,
            endingDay: true,
            color: "green",
            textColor: "gray"
        },
        "2012-05-04": {
            disabled: true,
            startingDay: true,
            color: "green",
            endingDay: true
        }
    }}
    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
    markingType={"period"}
/>;

<Calendar
    markedDates={{
        "2017-12-14": {
            periods: [
                { startingDay: false, endingDay: true, color: "#5f9ea0" },
                { startingDay: false, endingDay: true, color: "#ffa500" },
                { startingDay: true, endingDay: false, color: "#f0e68c" }
            ]
        },
        "2017-12-15": {
            periods: [
                { startingDay: true, endingDay: false, color: "#ffa500" },
                { color: "transparent" },
                { startingDay: false, endingDay: false, color: "#f0e68c" }
            ]
        }
    }}
    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
    markingType="multi-period"
/>;

<Calendar
    // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
    markingType="custom"
    markedDates={{
        "2018-03-28": {
            customStyles: {
                container: {
                    backgroundColor: "green"
                },
                text: {
                    color: "black",
                    fontWeight: "bold"
                }
            }
        },
        "2018-03-29": {
            customStyles: {
                container: {
                    backgroundColor: "white",
                    elevation: 2
                },
                text: {
                    color: "blue"
                }
            }
        }
    }}
/>;

<Calendar
    // Specify style for calendar container element. Default = {}
    style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350
    }}
    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: "#ffffff",
        arrowColor: "orange",
        monthTextColor: "blue",
        textDayFontFamily: "monospace",
        textMonthFontFamily: "monospace",
        textDayHeaderFontFamily: "monospace",
        textMonthFontWeight: "bold",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
    }}
/>;

<Calendar
    style={[{}, { height: 300 }]}
    dayComponent={({ date, state }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: state === "disabled" ? "gray" : "black"
                    }}
                >
                    {date.day}
                </Text>
            </View>
        );
    }}
/>;

<CalendarList
    // Callback which gets executed when visible months change in scroll view. Default = undefined
    onVisibleMonthsChange={months => {
        console.log("now these months are visible", months);
    }}
    // Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={50}
    // Horizontal
    horizontal={true}
    // Max amount of months allowed to scroll to the future. Default = 50
    futureScrollRange={50}
    // Enable or disable scrolling of calendar list
    scrollEnabled={true}
    // Enable or disable vertical scroll indicator. Default = false
    showScrollIndicator={true}
    // Initially visible month. Default = Date()
    current={"2012-03-01"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={day => {
        console.log("selected day", day);
    }}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={day => {
        console.log("selected day", day);
    }}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={month => {
        console.log("month changed", month);
    }}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={direction => <div />}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => console.log(substractMonth)}
    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    onPressArrowRight={addMonth => console.log(addMonth)}
/>;

<Agenda
    // the list of items that have to be displayed in agenda. If you want to render item as empty date
    // the value of date key kas to be an empty array []. If there exists no value for date key it is
    // considered that the date in question is not yet loaded
    items={{
        "2012-05-22": [{ text: "item 1 - any js object" }],
        "2012-05-23": [{ text: "item 2 - any js object" }],
        "2012-05-24": [],
        "2012-05-25": [
            { text: "item 3 - any js object" },
            { text: "any js object" }
        ]
    }}
    // callback that gets called when items for a certain month should be loaded (month became visible)
    loadItemsForMonth={month => {
        console.log("trigger items loading");
    }}
    // callback that fires when the calendar is opened or closed
    onCalendarToggled={calendarOpened => {
        console.log(calendarOpened);
    }}
    // callback that gets called on day press
    onDayPress={day => {
        console.log("day pressed");
    }}
    // callback that gets called when day changes while scrolling agenda list
    onDayChange={day => {
        console.log("day changed");
    }}
    // initially selected day
    selected={"2012-05-16"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={50}
    // Max amount of months allowed to scroll to the future. Default = 50
    futureScrollRange={50}
    // specify how each item should be rendered in agenda
    renderItem={(item, firstItemInDay) => {
        return <View />;
    }}
    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
    renderDay={(day, item) => {
        return <View />;
    }}
    // specify how empty date content with no items should be rendered
    renderEmptyDate={() => {
        return <View />;
    }}
    // specify how agenda knob should look like
    renderKnob={() => {
        return <View />;
    }}
    // specify what should be rendered instead of ActivityIndicator
    renderEmptyData={() => {
        return <View />;
    }}
    // specify your item comparison function for increased performance
    rowHasChanged={(r1, r2) => {
        return r1.text !== r2.text;
    }}
    // Hide knob button. Default = false
    hideKnob={true}
    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
    markedDates={{
        "2012-05-16": { selected: true, marked: true },
        "2012-05-17": { marked: true },
        "2012-05-18": { disabled: true }
    }}
    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
    onRefresh={() => console.log("refreshing...")}
    // Set this true while waiting for new data from a refresh
    refreshing={false}
    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
    refreshControl={null}
    // agenda theme
    theme={{
        agendaDayTextColor: "yellow",
        agendaDayNumColor: "green",
        agendaTodayColor: "red",
        agendaKnobColor: "blue"
    }}
    // agenda container style
    style={{}}
/>;