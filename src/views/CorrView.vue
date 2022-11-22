<template>
  <div>
    <h3 class="psycho-corr__title">Нейропсихологическая коррекция</h3>
    <div class="psycho-corr__line"></div>
    <h4 class="psycho-corr__description">Oдин из эффективных методов помощи детям, помогающий преодолеть:</h4>
    <ul
      v-for="elem in corr"
      :key="elem.id"
      class="psycho-corr__list">
      <div class="psycho-corr__list-icon">&#9650;</div>
      <li class="psycho-corr__list-elem">{{ elem.text }}</li>
    </ul>
    <p>
      Программа коррекции разрабатывается индивидуально для каждого ребенка на основе классических нейропсихологических методов с использованием элементов телесно-ориентированной терапии, а также наиболее эффективных приемов, заимствованных из смежных дисциплин (дефектология, логопедия, педагогика и т.д.).
    </p>
    <p>
      Каждое занятие включает в себя двигательные (сенсомоторная коррекция) и когнитивные (игры и задания, направленные на развитие высших психических функций ребенка) упражнения, а также элементы дыхательной гимнастики и телесно-ориентированной терапии.
    </p>
    <p>
      Дополнительно может использоваться комплекс упражнений на специальной балансировочной доске Белгау (в сочетании с дополнительным оснащением из программы Баламетрикс (Balametrics)), направленных на синхронизацию двигательных и познавательных навыков, развитие зрительно-моторной координации, межполушарного взаимодействия, контроля и саморегуляции.
    </p>
  </div>
</template>

<script>
import CORR from '../constants/corr'

export default {

  data () {
		return {
			corr: CORR,
		}
	}
}
</script>

<style lang="scss" scoped>
.psycho-corr {
  &__title {
    font-weight: 400;
    text-transform: uppercase;
  }

  &__description {
    font-weight: 400;
  }

  &__line {
    width: 30%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--theme-color-line);
  }

  &__list {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;

    &-icon {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      color: var(--theme-color-list-icon);
      transform: rotate(90deg);
    }
    
  }
}
</style>