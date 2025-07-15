import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TrainingDefineDatatypeComponent } from './training-define-datatype/training-define-datatype.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { EventTrainingComponent } from './event-training/event-training.component';
import { GetInputComponent } from './get-input/get-input.component';
import { ConditionTrainingComponent } from './condition-training/condition-training.component';
import { ElseIfConditionComponent } from './else-if-condition/else-if-condition.component';
import { SwitchConditionComponent } from './switch-condition/switch-condition.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SignalsComponent } from './signal/signals.component';
import { SignalTypeComponent } from './signal-type/signal-type.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectSignalComponent } from './effect-signal/effect-signal.component';
import { LoopContextualVariablesComponent } from './loop-contextual-variables/loop-contextual-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicRoutingComponent } from "./basic-routing/basic-routing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TrainingDefineDatatypeComponent,
    CounterAppComponent,
    EventTrainingComponent,
    GetInputComponent,
    ConditionTrainingComponent,
    ElseIfConditionComponent,
    SwitchConditionComponent,
    ForLoopComponent,
    SignalsComponent,
    SignalTypeComponent,
    ComputedSignalComponent,
    EffectSignalComponent,
    LoopContextualVariablesComponent,
    TwoWayBindingComponent,
    TodoListComponent,
    DynamicStyleComponent,
    DirectivesComponent,
    BasicRoutingComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-Training';
  name = 'Angular-Training-19';
  demo: number = 30;

  HandleClicked() {
    console.log('Function callled');
  }
}
