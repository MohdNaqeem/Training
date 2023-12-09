using System;

namespace AbstractClassDemo
{
    abstract class iPhone
    {
        //Non-Abstract Method   
        public void Call()
        {
            Console.WriteLine("Call Method: This method provides Calling features");
        }
    }

    class Program : iPhone
    {
        static void Main(string[] args)
        {
            //Instance Creation of Derived Class   
            Program program = new Program();
            program.Call();
            Console.ReadKey();
        }
    }
}