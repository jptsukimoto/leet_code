export const showChallengeDetails = (challenge: string, inputs: any, output: any): void => {
    console.log('=========================================================================')
    console.log('🏆 Challenge ->', challenge)
    console.log('\n', '---------------------------------------------------')
    console.log(`➡️  Inputs`)
    for (const [key, value] of Object.entries(inputs)) {
        console.log(`- ${key} ->`, value)
    }
    console.log('\n', '---------------------------------------------------')
    console.log('⬅️  Output ->', output, '\n')
}
