<template>
    <div class="counter-wrapper">
        <div class="counter">
            {{ counter.count }}
        </div>
        <button @click="handleByNum('plus')">Increment</button>
        <button @click="handleByNum('minus')">Decrement</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, State, namespace } from 'vuex-class';
import { ActionContext, Store } from 'vuex';

@Component
export default class Counter extends Vue {
    // @State(state => state.counter) counter: StoreState.Counter;
    @Action('handleByNum') handleByNumAction: any;
    private get counter (): StoreState.Counter {
        return this.$store.state.counter;
    }
    handleByNum (type: string): void {
        let v;
        if (type === 'plus') {
            v = this.counter.count + 1;
        } else {
            v = this.counter.count - 1;
        }
        const test = (s: string) => {
            console.log(s);
        };
        this.handleByNumAction(1);
        this.$store.dispatch('handleByNum', 'asdf');
    }
    mounted () {
        // console.log(this.counter);
    }
}
</script>

<style>
.counter {
    height: 200px;
    margin: 100px auto;
    line-height: 200px;
    font-size: 5rem;
    border-radius: 3px;
    width: 200px;
    text-align: center;
    background-color: #f0f0f0;
    user-select: none;
}
</style>
