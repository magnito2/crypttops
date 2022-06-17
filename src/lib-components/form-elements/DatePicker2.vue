<template>
<div class="datepicker-wrapper" ref="dateRef">
    <div class="input-select-item">
        <img src="../../assets/calendar.svg" alt="" @click="toggleDateModal">
        <p class="date" pattern="DD-MM-YY">
            <span class="label">Start Date </span>| <span class="date-text">{{ selectedDate.toLocaleDateString("en-GB")}}</span>
        </p>
    </div>
    <div v-if="showModal" class="dateModal">
        <div class="header">
            <span class="controls" @click="decrementMonth">
                {{'<<'}}
            </span>
            <span class="month">{{ fullMonth }}</span>
            <span class="controls" @click="incrementMonth">
                {{'>>'}}
            </span>
        </div>
        <hr>
        <div class="body">
            <table>
                <thead>
                    <tr>
                        <th>Su</th>
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th>Sa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="wk in daysInSelectedMonthArr" :key="wk">
                        <td 
                            v-for="day in wk" :key="day" 
                            @click="setDate" 
                            :data-date="day.date"
                            :class="{active: isActiveDate(day.date), inactive: isInactiveDate(day.date)}"
                        >
                            {{ day.day }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "DatePicker",
    props: { modelValue: Date },
    data() {
        return {
            showModal: false,
            weekdays : ['S','M','T','W','T','F', 'S'],
            selectedDate : new Date(this.modelValue),
            displayDate: new Date(this.modelValue)
        };
    },
    emits: ['update:modelValue'],
    methods: {
        toggleDateModal() {
            this.showModal = !this.showModal;

            if(this.showModal){
                document.body.addEventListener('click', this.closeOutside);
            } else {
                document.body.removeEventListener('click', this.closeOutside)
            }
        },
        closeModal(){
            this.showModal = false;
        },
        setDate(e){
            const date = e.target.dataset.date;
            this.selectedDate = new Date(date);
            this.$emit("update:modelValue", this.selectedDate);
        },
        getFirstDayofMonth(){
            const dayOne = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth(), 1);
            return dayOne.getDay();
        },
        incrementMonth(){
            this.displayDate = new Date(this.displayDate.setMonth(this.displayDate.getMonth() + 1))
        },
        decrementMonth(){
            this.displayDate = new Date(this.displayDate.setMonth(this.displayDate.getMonth() -1))
        },
        isActiveDate(datestr){
            const date = new Date(datestr);
            return date.getFullYear() == this.selectedDate.getFullYear() &&
                date.getMonth() == this.selectedDate.getMonth() &&
                date.getDate() == this.selectedDate.getDate();
        },
        isInactiveDate(datestr){
            const date = new Date(datestr);
            return !(date.getFullYear() == this.displayDate.getFullYear() &&
                date.getMonth() == this.displayDate.getMonth());
        },
        closeOutside(e){
            if(!(e.target == this.$refs.dateRef || this.$refs.dateRef.contains(e.target))){
                this.showModal = false;
            }
        }
    },
    computed: {
        numberOfDaysInSelectedMonth(){
            return new Date(this.displayDate.getFullYear(), this.displayDate.getMonth() + 1, 0).getDate();
        },
        fullMonth(){
            return this.displayDate.toLocaleString('default', { month: 'short' }) + " " + this.displayDate.getFullYear();
        },
        daysInSelectedMonthArr(){
            const weeksArr = [];
            const daysArr = [];
            const firstDay = this.getFirstDayofMonth();
            
            //fill days in previous month
            const prevMonth = new Date(new Date().setMonth(this.displayDate.getMonth() - 1));
            const daysInPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 0).getDate();

            for(let i = 0; i < firstDay; i++){
                daysArr.unshift({'day': daysInPrevMonth - i, 'date': new Date(prevMonth.getFullYear(), prevMonth.getMonth(), daysInPrevMonth - i)})
            }
            for(let i = 1; i <= this.numberOfDaysInSelectedMonth; i++ ){
                daysArr.push({'day': i, 'date': new Date(this.displayDate.getFullYear(), this.displayDate.getMonth(), i)});
            }
            //pad the extra days in the next month
            if(7 - daysArr.length % 7 !== 0){
                const leftDays = 7 - daysArr.length % 7;

                for(let i =0; i < leftDays; i++){
                    daysArr.push({'day': i + 1, 'date': new Date(this.displayDate.getFullYear(), this.displayDate.getMonth() + 1, i + 1)});
                }
            }

            for(let wk = 0; wk < Math.ceil(daysArr.length / 7); wk++){
                const tempArr = [];
                for(let i = 0; i < 7; i++){
                    if(daysArr.length > wk * 7 + i){
                        tempArr.push(daysArr[wk * 7 + i])
                    }
                }
                weeksArr.push(tempArr);
            }
 
            return weeksArr;
        }
    }
}
</script>

<style lang="scss" scoped>

.datepicker-wrapper {
    margin: 0;
    padding: 0;
    position: relative;
    color: #9F9F9F;
}
.input-select-item {
    background:#131313;
    height:55px;
    border-radius: 7px;
    box-sizing: border-box;
    border:2px solid #3b3b3b;
    width:100%;
    margin: 18px 0 3px;
    display: flex;
    align-items: center;

    img{
        height: 20px;
        padding: 0 18px;
        cursor: pointer;
    }

    .date {
        padding: 0 18px 0 0;
        font-size: 12px;
        display: flex;
        align-items: center;

        .label {
            padding: 0 12px;
        }
        .date-text {
            font-size: 14px;
            padding: 0 12px;
        }
    }
}

.dateModal {
    background: #070707;
    position: absolute;
    width: 100%;
    bottom: 60px;
    z-index: 100;

    .header {
        display: flex;
        justify-content: center;

        .controls {
            padding: 0 10px;
            margin: 5px;
            cursor: pointer;
            &:hover {
                background: #ffa800;
                color: #1d1d1d;
            }
        }
        .month {
            display: flex;
            align-items: center;
        }
    }

    hr {
        border: 0.5px solid #1d1d1d;
        padding: 0;
        margin: 0;

    }
    .body {
        table {
            width: 100%;
            th, td {
                padding: 2px 0;
                text-align: center;
                cursor: pointer;
            }

            td {
                &:hover {
                    background: #ffa800;
                    color: #1d1d1d;
                }

                &.active {
                    background: #ffa800;
                    color: #1d1d1d;
                }

                &.inactive {
                    color: #1d1d1d;
                }
            }
        }
    }
}
</style>